import useTranslation from "@/hooks/useTranslation";
import { AutoStories, Diversity3, Language, LocationOn, Mosque, Science, SportsSoccer } from "@mui/icons-material";
import { Box, Button, Chip, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const pillarIcons = [<Mosque />, <Science />, <Language />, <SportsSoccer />];

const campusImages = [
  "/images/Photo-32.jpg",
  "/images/Photo-36.jpg",
  "/images/Photo-41.jpg",
];

export default function LandingPage() {
  const router = useRouter();
  const { t } = useTranslation(router);
  const highlights = t("LandingNew.Highlights") || [];
  const pillars = t("LandingNew.Pillars") || [];
  const journey = t("LandingNew.Journey.Items") || [];
  const tags = t("LandingNew.Tags") || [];
  const isArabic = router.locale === "ar";

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        direction: isArabic ? "rtl" : "ltr",
      }}
    >
      <Box
        component="section"
        sx={{
          position: "relative",
          minHeight: { xs: "calc(100vh - 74px)", md: "calc(100vh - 92px)" },
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          bgcolor: "#071D34",
          color: "common.white",
          "&:before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(7,29,52,.95) 0%, rgba(7,29,52,.78) 48%, rgba(7,29,52,.32) 100%), url('/images/Photo-32.jpg') center/cover",
          },
        }}
      >
        <Container maxWidth="xl" sx={{ position: "relative", py: { xs: 7, md: 10 } }}>
          <Grid container spacing={{ xs: 5, md: 8 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              {/* <Chip
                icon={<LocationOn />}
                label={t("LandingNew.Location")}
                sx={{
                  mb: 3,
                  bgcolor: "rgba(255,255,255,.12)",
                  color: "common.white",
                  border: "1px solid rgba(255,255,255,.22)",
                  "& .MuiChip-icon": { color: "secondary.main" },
                }}
              /> */}
              <Typography
                component="h1"
                sx={{
                  maxWidth: 820,
                  fontSize: { xs: "42px", sm: "56px", md: "76px" },
                  lineHeight: .94,
                  fontWeight: 800,
                  letterSpacing: 0,
                }}
              >
                {t("LandingNew.HeroTitle")}
              </Typography>
              <Typography
                sx={{
                  mt: 3,
                  maxWidth: 680,
                  color: "rgba(255,255,255,.82)",
                  fontSize: { xs: "18px", md: "22px" },
                  lineHeight: 1.65,
                }}
              >
                {t("LandingNew.HeroText")}
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 4 }}>
                <Button
                  component={Link}
                  href="/engage/registration-fees"
                  variant="contained"
                  size="large"
                  sx={{ px: 4, py: 1.4 }}
                >
                  {t("LandingNew.PrimaryCta")}
                </Button>
                <Button
                  component={Link}
                  href="/contact"
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.4,
                    color: "common.white",
                    borderColor: "rgba(255,255,255,.42)",
                    "&:hover": { borderColor: "secondary.main" },
                  }}
                >
                  {t("LandingNew.SecondaryCta")}
                </Button>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  ml: { md: "auto" },
                  maxWidth: 460,
                  border: "1px solid rgba(255,255,255,.2)",
                  bgcolor: "rgba(255,255,255,.08)",
                  backdropFilter: "blur(16px)",
                  p: { xs: 2.5, md: 3 },
                }}
              >
                <Stack divider={<Divider sx={{ borderColor: "rgba(255,255,255,.16)" }} />}>
                  {highlights.map((item: { label: string; value: string }) => (
                    <Box key={item.label} sx={{ py: 2 }}>
                      <Typography sx={{ color: "secondary.main", fontWeight: 800 }}>
                        {item.label}
                      </Typography>
                      <Typography sx={{ mt: .6, color: "rgba(255,255,255,.82)" }}>
                        {item.value}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 11 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 4, md: 8 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="overline" color="secondary.main" fontWeight={800}>
                {t("LandingNew.IntroEyebrow")}
              </Typography>
              <Typography variant="h2" sx={{ mt: 1, maxWidth: 560 }}>
                {t("LandingNew.IntroTitle")}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography sx={{ fontSize: { xs: 17, md: 19 }, lineHeight: 1.8, color: "text.secondary" }}>
                {t("LandingNew.IntroText")}
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2.5} sx={{ mt: { xs: 4, md: 7 } }}>
            {pillars.map((pillar: { title: string; text: string }, index: number) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={pillar.title}>
                <Box
                  sx={{
                    height: "100%",
                    p: 3,
                    bgcolor: "background.paper",
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Box sx={{ color: "primary.main", mb: 2, "& svg": { fontSize: 34 } }}>
                    {pillarIcons[index]}
                  </Box>
                  <Typography variant="h5">{pillar.title}</Typography>
                  <Typography sx={{ mt: 1.5, color: "text.secondary", lineHeight: 1.7 }}>
                    {pillar.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ bgcolor: "primary.main", color: "common.white", py: { xs: 7, md: 10 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 5, md: 8 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: "secondary.main", fontWeight: 800 }}>
                {t("LandingNew.Journey.Eyebrow")}
              </Typography>
              <Typography variant="h2" sx={{ mt: 1 }}>
                {t("LandingNew.Journey.Title")}
              </Typography>
              <Stack spacing={2.5} sx={{ mt: 4 }}>
                {journey.map((item: string, index: number) => (
                  <Stack direction="row" spacing={2.2} sx={{ alignItems: "flex-start" }} key={item}>
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        flex: "0 0 36px",
                        display: "grid",
                        placeItems: "center",
                        bgcolor: "secondary.main",
                        color: "primary.dark",
                        fontWeight: 900,
                      }}
                    >
                      {index + 1}
                    </Box>
                    <Typography sx={{ pt: .5, color: "rgba(255,255,255,.84)", fontSize: 18 }}>
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 2,
                  alignItems: "end",
                }}
              >
                {campusImages.map((src, index) => (
                  <Box
                    component="img"
                    src={src}
                    alt=""
                    key={src}
                    sx={{
                      width: "100%",
                      height: index === 0 ? { xs: 240, md: 420 } : { xs: 150, md: 220 },
                      objectFit: "cover",
                      gridRow: index === 0 ? "span 2" : "auto",
                      border: "1px solid rgba(255,255,255,.18)",
                    }}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, bgcolor: "#F6F1E8" }}>
        <Container maxWidth="lg">
          <Stack spacing={2} sx={{ alignItems: "center", textAlign: "center" }}>
            <AutoStories sx={{ color: "primary.main", fontSize: 42 }} />
            <Typography variant="h2" sx={{ maxWidth: 840 }}>
              {t("LandingNew.Admissions.Title")}
            </Typography>
            <Typography sx={{ maxWidth: 720, color: "text.secondary", fontSize: 18, lineHeight: 1.8 }}>
              {t("LandingNew.Admissions.Text")}
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ pt: 2 }}>
              <Button component={Link} href="/engage" variant="contained" size="large">
                {t("LandingNew.Admissions.PrimaryCta")}
              </Button>
              <Button component={Link} href="/academics" variant="outlined" size="large">
                {t("LandingNew.Admissions.SecondaryCta")}
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 6, md: 8 }, bgcolor: "background.paper" }}>
        <Container maxWidth="xl">
          <Grid container spacing={3} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant="h3">
                {t("LandingNew.ClosingTitle")}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack direction="row" spacing={1.2} useFlexGap sx={{ flexWrap: "wrap" }}>
                {tags.map((tag: string) => (
                  <Chip key={tag} label={tag} variant="outlined" sx={{ borderColor: "primary.main" }} />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
