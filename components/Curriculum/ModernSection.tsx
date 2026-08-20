import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";

const ModernSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const subjects = [
    t("Academics.Curriculum.Modern.Math"),
    t("Academics.Curriculum.Modern.Science"),
    t("Academics.Curriculum.Modern.ComputerScience"),
    t("Academics.Curriculum.Modern.Sports"),
    t("Academics.Curriculum.Modern.Arts"),
  ];

  return (
    <PageSection bg={theme.palette.blue.dark} sx={{ py: { xs: 7, md: 9 } }}>
      <PageSectionColumn md={5} align="start" justify="start">
        <Typography
          component="h2"
          sx={{ color: "common.white", fontSize: { xs: 34, md: 48 }, fontWeight: 900, lineHeight: 1.08 }}
        >
          {t("Academics.Curriculum.Modern.Title")}
        </Typography>
        <Typography sx={{ mt: 2.5, color: "rgba(255,255,255,.78)", lineHeight: 1.85, fontSize: { xs: 16, md: 18 } }}>
          {t("Academics.Curriculum.Modern.Description")}
        </Typography>
      </PageSectionColumn>

      <PageSectionColumn md={7}>
        <Box sx={{ width: "100%", bgcolor: "rgba(255,255,255,.06)", borderTop: `3px solid ${theme.palette.secondary.main}` }}>
          <Stack divider={<Divider sx={{ borderColor: "rgba(255,255,255,.14)" }} />}>
            {subjects.map((subject, index) => (
              <Stack
                key={subject}
                direction="row"
                spacing={2}
                sx={{ px: { xs: 2.4, md: 3.4 }, py: 2.2, alignItems: "center" }}
              >
                <Typography sx={{ color: theme.palette.secondary.main, fontWeight: 900, width: 30 }}>
                  {String(index + 1).padStart(2, "0")}
                </Typography>
                <Typography sx={{ color: "common.white", fontSize: { xs: 18, md: 21 }, fontWeight: 800 }}>
                  {subject}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      </PageSectionColumn>
    </PageSection>
  );
};

export default ModernSection;
