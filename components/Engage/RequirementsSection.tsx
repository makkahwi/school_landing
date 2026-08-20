import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";

const RequirementsSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const sections = [
    {
      title: t("Engage.Registration.Requirements.Title"),
      groups: [
        {
          title: t("Engage.Registration.Requirements.Id.Title"),
          items: [
            t("Engage.Registration.Requirements.Id.Point1"),
            t("Engage.Registration.Requirements.Id.Point2"),
            t("Engage.Registration.Requirements.Id.Point3"),
            t("Engage.Registration.Requirements.Id.Point4"),
            t("Engage.Registration.Requirements.Id.Point5"),
          ],
        },
        {
          title: t("Engage.Registration.Requirements.LastSchool.Title"),
          items: [
            t("Engage.Registration.Requirements.LastSchool.Point1"),
            t("Engage.Registration.Requirements.LastSchool.Point2"),
          ],
        },
        {
          title: t("Engage.Registration.Requirements.Forms.Title"),
          items: [
            t("Engage.Registration.Requirements.Forms.Point1"),
            t("Engage.Registration.Requirements.Forms.Point2"),
          ],
        },
      ],
    },
    {
      title: t("Engage.Registration.Deadlines.Title"),
      groups: [
        {
          title: t("Engage.Registration.Deadlines.Sem1.Title"),
          items: [t("Engage.Registration.Deadlines.Sem1.Description")],
        },
        {
          title: t("Engage.Registration.Deadlines.Sem2.Title"),
          items: [t("Engage.Registration.Deadlines.Sem2.Description")],
        },
        {
          title: t("Engage.Registration.Deadlines.Sem3.Title"),
          items: [t("Engage.Registration.Deadlines.Sem3.Description")],
        },
      ],
    },
  ];

  return (
    <PageSection sx={{ py: { xs: 7, md: 9 } }} align="top">
      {sections.map((section) => (
        <PageSectionColumn md={6} key={section.title} align="stretch">
          <Box
            sx={{
              height: "100%",
              bgcolor: "background.paper",
              borderTop: `4px solid ${theme.palette.orange.main}`,
              px: { xs: 2.4, md: 3.4 },
              py: { xs: 3, md: 3.6 },
            }}
          >
            <Typography
              component="h2"
              sx={{
                color: "primary.dark",
                fontSize: { xs: 26, md: 34 },
                fontWeight: 900,
                lineHeight: 1.12,
                mb: 2.5,
              }}
            >
              {section.title}
            </Typography>

            <Stack
              divider={<Divider sx={{ borderColor: "rgba(11,53,88,.14)" }} />}
            >
              {section.groups.map((group) => (
                <Box key={group.title} sx={{ py: 2.2 }}>
                  <Typography
                    component="h3"
                    sx={{
                      color: theme.palette.orange.main,
                      fontSize: { xs: 18, md: 21 },
                      fontWeight: 850,
                      mb: 1.4,
                    }}
                  >
                    {group.title}
                  </Typography>

                  <Stack spacing={1.2}>
                    {group.items.map((item) => (
                      <Stack
                        direction="row"
                        spacing={1.2}
                        key={item}
                        sx={{ alignItems: "flex-start" }}
                      >
                        <CheckCircleIcon
                          sx={{
                            color: "primary.main",
                            fontSize: 20,
                            mt: 0.2,
                            flex: "0 0 auto",
                          }}
                        />
                        <Typography
                          sx={{ color: "text.secondary", lineHeight: 1.7 }}
                        >
                          {item}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Box>
              ))}
            </Stack>
          </Box>
        </PageSectionColumn>
      ))}
    </PageSection>
  );
};

export default RequirementsSection;
