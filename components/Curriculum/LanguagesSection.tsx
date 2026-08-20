import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";

const LanguagesSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const languages = [
    {
      title: t("Academics.Curriculum.Languages.Arabic.Title"),
      content: t("Academics.Curriculum.Languages.Arabic.Description"),
      greeting: "أهلاً وسهلاً",
    },
    {
      title: t("Academics.Curriculum.Languages.English.Title"),
      content: t("Academics.Curriculum.Languages.English.Description"),
      greeting: "Welcome",
    },
    {
      title: t("Academics.Curriculum.Languages.Malay.Title"),
      content: t("Academics.Curriculum.Languages.Malay.Description"),
      greeting: "Selamat Datang",
    },
  ];

  return (
    <PageSection bg="" sx={{ py: { xs: 7, md: 9 } }}>
      <PageSectionColumn md={4} align="start" justify="start">
        <Typography
          component="h2"
          sx={{ color: "primary.dark", fontSize: { xs: 34, md: 48 }, fontWeight: 900, lineHeight: 1.08 }}
        >
          {t("Academics.Curriculum.Languages.Title")}
        </Typography>
        <Typography sx={{ mt: 2, color: theme.palette.orange.main, fontWeight: 900 }}>
          Arabic · English · Malay
        </Typography>
      </PageSectionColumn>

      <PageSectionColumn md={8}>
        <Stack
          divider={<Divider sx={{ borderColor: "rgba(11,53,88,.14)" }} />}
          sx={{ width: "100%", bgcolor: "background.paper", borderTop: `3px solid ${theme.palette.orange.main}` }}
        >
          {languages.map((item) => (
            <Stack
              key={item.title}
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 1, md: 4 }}
              sx={{ px: { xs: 2.4, md: 3.4 }, py: { xs: 2.8, md: 3.2 } }}
            >
              <Typography sx={{ minWidth: { md: 180 }, color: "primary.dark", fontWeight: 900 }}>
                {item.greeting}
              </Typography>
              <Box>
                <Typography component="h3" sx={{ color: "primary.dark", fontSize: 24, fontWeight: 850 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ mt: 1, color: "text.secondary", lineHeight: 1.8 }}>
                  {item.content}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
      </PageSectionColumn>
    </PageSection>
  );
};

export default LanguagesSection;
