import PageHeader from "@/components/common/PageHeader";
import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import {
  AdminContent,
  defaultContacts,
  defaultFees,
  defaultStudyLevels,
  getStoredAdminContent,
  mergeAdminContent,
} from "@/utils/adminContent";
import {
  fetchFirebaseContent,
  isFirebaseConfigured,
  saveFirebaseContent,
  signInFirebaseAdmin,
  signOutFirebaseAdmin,
  subscribeToFirebaseAdmin,
} from "@/utils/firebaseContent";
import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

const AdminPage = () => {
  const router = useRouter();
  const { t } = useTranslation(router);
  const fallbackContent = useMemo<AdminContent>(
    () => ({
      contacts: defaultContacts(t),
      fees: defaultFees(t),
      studyLevels: defaultStudyLevels(t),
    }),
    [t],
  );

  const [isAuthed, setIsAuthed] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [content, setContent] = useState<AdminContent>(fallbackContent);
  const [saved, setSaved] = useState(false);
  const [loadError, setLoadError] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const unsubscribe = subscribeToFirebaseAdmin((user) => {
      setIsAuthed(Boolean(user));
      setAuthChecked(true);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    fetchFirebaseContent()
      .then((stored) => {
        setContent(mergeAdminContent(fallbackContent, stored));
        setLoadError(
          isFirebaseConfigured()
            ? ""
            : "Firebase env vars are missing. Showing default content.",
        );
      })
      .catch((error) => {
        setContent(mergeAdminContent(fallbackContent, getStoredAdminContent()));
        setLoadError(
          error instanceof Error
            ? `Could not load Firebase content: ${error.message}`
            : "Could not load Firebase content. Showing local fallback content.",
        );
      });
  }, [fallbackContent]);

  const login = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoadError("");
    try {
      await signInFirebaseAdmin(email, password);
    } catch (error) {
      setLoadError(
        error instanceof Error
          ? `Could not sign in: ${error.message}`
          : "Could not sign in.",
      );
    }
  };

  const save = async () => {
    setSaving(true);
    setLoadError("");
    try {
      await saveFirebaseContent(content);
      window.dispatchEvent(new Event("ais-admin-content-updated"));
      setSaved(true);
    } catch (error) {
      setLoadError(
        error instanceof Error
          ? error.message
          : "Could not save content to Firebase.",
      );
    } finally {
      setSaving(false);
    }
  };

  const reset = async () => {
    setContent(fallbackContent);
    setSaving(true);
    try {
      await saveFirebaseContent(fallbackContent);
      window.dispatchEvent(new Event("ais-admin-content-updated"));
      setSaved(true);
    } catch (error) {
      setLoadError(
        error instanceof Error
          ? error.message
          : "Could not reset Firebase content.",
      );
    } finally {
      setSaving(false);
    }
  };

  if (!authChecked) {
    return (
      <Box sx={{ bgcolor: "background.default", minHeight: "70vh" }}>
        <PageHeader bg={theme.palette.blue.dark} title="Admin Login" />
        <Container maxWidth="sm" sx={{ py: { xs: 6, md: 9 } }}>
          <Typography>Checking admin session...</Typography>
        </Container>
      </Box>
    );
  }

  if (!isAuthed) {
    return (
      <Box sx={{ bgcolor: "background.default", minHeight: "70vh" }}>
        <PageHeader bg={theme.palette.blue.dark} title="Admin Login" />
        <Container maxWidth="sm" sx={{ py: { xs: 6, md: 9 } }}>
          <Box
            component="form"
            onSubmit={login}
            sx={{
              bgcolor: "background.paper",
              borderTop: `4px solid ${theme.palette.orange.main}`,
              p: { xs: 3, md: 4 },
            }}
          >
            <Typography sx={{ color: "text.secondary", lineHeight: 1.7, mb: 3 }}>
              Sign in with the Firebase admin email and password to edit school
              contact details, fees, and study levels.
            </Typography>
            {loadError && <Alert severity="warning" sx={{ mb: 2 }}>{loadError}</Alert>}
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
              Sign In
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: "background.default" }}>
      <PageHeader bg={theme.palette.blue.dark} title="Admin Control" />
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <Stack spacing={3}>
          {saved && (
            <Alert severity="success" onClose={() => setSaved(false)}>
              Changes saved to Firebase Realtime Database.
            </Alert>
          )}
          {loadError && <Alert severity="warning">{loadError}</Alert>}

          <Box sx={{ bgcolor: "background.paper", borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={activeTab}
              onChange={(_, value) => setActiveTab(value)}
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="Contacts" />
              <Tab label="Registration Fees" />
              <Tab label="Study Levels" />
            </Tabs>
          </Box>

          {activeTab === 0 && (
            <Panel title="Contacts">
              <Stack spacing={2}>
                {[
                  ["phonePrimary", "Primary Phone"],
                  ["phoneSecondary", "Secondary Phone"],
                  ["email", "Email"],
                  ["meetingDays", "Meeting Days"],
                  ["meetingHours", "Meeting Hours"],
                  ["address", "Address"],
                  ["mapUrl", "Google Map Embed URL"],
                ].map(([field, label]) => (
                  <TextField
                    key={field}
                    label={label}
                    fullWidth
                    multiline={field === "mapUrl" || field === "address"}
                    minRows={field === "mapUrl" ? 3 : 1}
                    value={(content.contacts as any)[field]}
                    onChange={(event) =>
                      setContent((current) => ({
                        ...current,
                        contacts: {
                          ...current.contacts,
                          [field]: event.target.value,
                        },
                      }))
                    }
                  />
                ))}
              </Stack>
            </Panel>
          )}

          {activeTab === 1 && (
            <Panel title="Registration Fees">
              <Stack spacing={4}>
                {content.fees.map((section, sectionIndex) => (
                  <Box key={`${section.title}-${sectionIndex}`}>
                    <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                      <TextField
                        label="Section Title"
                        fullWidth
                        value={section.title}
                        onChange={(event) =>
                          updateFeeSection(sectionIndex, { title: event.target.value })
                        }
                      />
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => removeFeeSection(sectionIndex)}
                        sx={{ whiteSpace: "nowrap" }}
                      >
                        Remove Section
                      </Button>
                    </Stack>
                    <Stack spacing={2} sx={{ mt: 2 }}>
                      {section.items.map((item, itemIndex) => (
                        <Box
                          key={`${item.title}-${itemIndex}`}
                          sx={{ p: 2, border: "1px solid", borderColor: "divider" }}
                        >
                          <Stack spacing={2}>
                            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                            <TextField
                              label="Fee Title"
                              fullWidth
                              value={item.title}
                              onChange={(event) =>
                                updateFeeItem(sectionIndex, itemIndex, {
                                  title: event.target.value,
                                })
                              }
                            />
                              <Button
                                variant="text"
                                color="error"
                                onClick={() => removeFeeItem(sectionIndex, itemIndex)}
                                sx={{ whiteSpace: "nowrap" }}
                              >
                                Remove Fee
                              </Button>
                            </Stack>
                            <TextField
                              label="Price"
                              fullWidth
                              value={item.price}
                              onChange={(event) =>
                                updateFeeItem(sectionIndex, itemIndex, {
                                  price: event.target.value,
                                })
                              }
                            />
                            <TextField
                              label="Description"
                              fullWidth
                              multiline
                              minRows={2}
                              value={item.description}
                              onChange={(event) =>
                                updateFeeItem(sectionIndex, itemIndex, {
                                  description: event.target.value,
                                })
                              }
                            />
                          </Stack>
                        </Box>
                      ))}
                      <Button
                        variant="outlined"
                        onClick={() => addFeeItem(sectionIndex)}
                      >
                        Add Fee Item
                      </Button>
                    </Stack>
                  </Box>
                ))}
                <Button variant="contained" onClick={addFeeSection}>
                  Add Fee Section
                </Button>
              </Stack>
            </Panel>
          )}

          {activeTab === 2 && (
            <Panel title="Study Levels">
              <Stack spacing={4}>
                {content.studyLevels.map((level, levelIndex) => (
                  <Box key={level.key}>
                    <Stack direction={{ xs: "column", md: "row" }} spacing={2} sx={{ mb: 2 }}>
                      <TextField
                        label="Internal Key"
                        value={level.key}
                        fullWidth
                        onChange={(event) =>
                          updateStudyLevel(levelIndex, { key: event.target.value })
                        }
                      />
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => removeStudyLevel(levelIndex)}
                        sx={{ whiteSpace: "nowrap" }}
                      >
                        Remove Level
                      </Button>
                    </Stack>
                    <Stack spacing={2}>
                      <TextField
                        label="Level Title"
                        fullWidth
                        value={level.title}
                        onChange={(event) =>
                          updateStudyLevel(levelIndex, { title: event.target.value })
                        }
                      />
                      <TextField
                        label="Description"
                        fullWidth
                        multiline
                        minRows={3}
                        value={level.description}
                        onChange={(event) =>
                          updateStudyLevel(levelIndex, {
                            description: event.target.value,
                          })
                        }
                      />
                      <Divider />
                      {level.courses.map((course, courseIndex) => (
                        <Stack
                          key={`${level.key}-${courseIndex}`}
                          direction={{ xs: "column", md: "row" }}
                          spacing={2}
                        >
                        <TextField
                          label={`Course ${courseIndex + 1}`}
                          fullWidth
                          value={course}
                          onChange={(event) =>
                            updateStudyCourse(
                              levelIndex,
                              courseIndex,
                              event.target.value,
                            )
                          }
                        />
                          <Button
                            variant="text"
                            color="error"
                            onClick={() => removeStudyCourse(levelIndex, courseIndex)}
                            sx={{ whiteSpace: "nowrap" }}
                          >
                            Remove Course
                          </Button>
                        </Stack>
                      ))}
                      <Button
                        variant="outlined"
                        onClick={() => addStudyCourse(levelIndex)}
                      >
                        Add Course
                      </Button>
                    </Stack>
                  </Box>
                ))}
                <Button variant="contained" onClick={addStudyLevel}>
                  Add Study Level
                </Button>
              </Stack>
            </Panel>
          )}

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button variant="contained" onClick={save} disabled={saving}>
              {saving ? "Saving..." : "Save Changes"}
            </Button>
            <Button variant="outlined" onClick={reset} disabled={saving}>
              Reset to Default Content
            </Button>
            <Button
              variant="text"
              onClick={() => signOutFirebaseAdmin()}
            >
              Sign Out
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );

  function updateFeeSection(sectionIndex: number, patch: { title: string }) {
    setContent((current) => ({
      ...current,
      fees: current.fees.map((section, index) =>
        index === sectionIndex ? { ...section, ...patch } : section,
      ),
    }));
  }

  function updateFeeItem(
    sectionIndex: number,
    itemIndex: number,
    patch: Partial<AdminContent["fees"][number]["items"][number]>,
  ) {
    setContent((current) => ({
      ...current,
      fees: current.fees.map((section, index) =>
        index === sectionIndex
          ? {
              ...section,
              items: section.items.map((item, nestedIndex) =>
                nestedIndex === itemIndex ? { ...item, ...patch } : item,
              ),
            }
          : section,
      ),
    }));
  }

  function addFeeSection() {
    setContent((current) => ({
      ...current,
      fees: [
        ...current.fees,
        {
          title: "New Fee Section",
          items: [{ title: "New Fee", price: "0", description: "" }],
        },
      ],
    }));
  }

  function removeFeeSection(sectionIndex: number) {
    setContent((current) => ({
      ...current,
      fees: current.fees.filter((_, index) => index !== sectionIndex),
    }));
  }

  function addFeeItem(sectionIndex: number) {
    setContent((current) => ({
      ...current,
      fees: current.fees.map((section, index) =>
        index === sectionIndex
          ? {
              ...section,
              items: [
                ...section.items,
                { title: "New Fee", price: "0", description: "" },
              ],
            }
          : section,
      ),
    }));
  }

  function removeFeeItem(sectionIndex: number, itemIndex: number) {
    setContent((current) => ({
      ...current,
      fees: current.fees.map((section, index) =>
        index === sectionIndex
          ? {
              ...section,
              items: section.items.filter((_, nestedIndex) => nestedIndex !== itemIndex),
            }
          : section,
      ),
    }));
  }

  function updateStudyLevel(
    levelIndex: number,
    patch: Partial<AdminContent["studyLevels"][number]>,
  ) {
    setContent((current) => ({
      ...current,
      studyLevels: current.studyLevels.map((level, index) =>
        index === levelIndex ? { ...level, ...patch } : level,
      ),
    }));
  }

  function updateStudyCourse(
    levelIndex: number,
    courseIndex: number,
    value: string,
  ) {
    setContent((current) => ({
      ...current,
      studyLevels: current.studyLevels.map((level, index) =>
        index === levelIndex
          ? {
              ...level,
              courses: level.courses.map((course, nestedIndex) =>
                nestedIndex === courseIndex ? value : course,
              ),
            }
          : level,
      ),
    }));
  }

  function addStudyLevel() {
    setContent((current) => ({
      ...current,
      studyLevels: [
        ...current.studyLevels,
        {
          key: `Custom${current.studyLevels.length + 1}`,
          title: "New Study Level",
          description: "Describe this study level.",
          courses: ["New Course"],
        },
      ],
    }));
  }

  function removeStudyLevel(levelIndex: number) {
    setContent((current) => ({
      ...current,
      studyLevels: current.studyLevels.filter((_, index) => index !== levelIndex),
    }));
  }

  function addStudyCourse(levelIndex: number) {
    setContent((current) => ({
      ...current,
      studyLevels: current.studyLevels.map((level, index) =>
        index === levelIndex
          ? { ...level, courses: [...level.courses, "New Course"] }
          : level,
      ),
    }));
  }

  function removeStudyCourse(levelIndex: number, courseIndex: number) {
    setContent((current) => ({
      ...current,
      studyLevels: current.studyLevels.map((level, index) =>
        index === levelIndex
          ? {
              ...level,
              courses: level.courses.filter(
                (_, nestedIndex) => nestedIndex !== courseIndex,
              ),
            }
          : level,
      ),
    }));
  }
};

const Panel = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Box
    sx={{
      bgcolor: "background.paper",
      borderTop: `4px solid ${theme.palette.orange.main}`,
      p: { xs: 2.5, md: 4 },
    }}
  >
    <Typography
      component="h2"
      sx={{ color: "primary.dark", fontSize: 30, fontWeight: 900, mb: 3 }}
    >
      {title}
    </Typography>
    {children}
  </Box>
);

export default AdminPage;
