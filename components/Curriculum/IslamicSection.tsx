import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Box, Chip, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";

const IslamicSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const subjects = [
    t("Academics.Curriculum.Islamic.Quran"),
    t("Academics.Curriculum.Islamic.Fiqh"),
    t("Academics.Curriculum.Islamic.Culture"),
  ];

  return (
    <PageSection sx={{ py: { xs: 7, md: 9 } }}>
      <PageSectionColumn md={7} align="start">
        <Typography
          component="h2"
          sx={{ color: "primary.dark", fontSize: { xs: 34, md: 48 }, fontWeight: 900, lineHeight: 1.08 }}
        >
          {t("Academics.Curriculum.Islamic.Title")}
        </Typography>
        <Typography sx={{ mt: 2.5, color: "text.secondary", lineHeight: 1.85, fontSize: { xs: 16, md: 18 } }}>
          {t("Academics.Curriculum.Islamic.Description")}
        </Typography>
      </PageSectionColumn>

      <PageSectionColumn md={5}>
        <Box
          sx={{
            width: "100%",
            bgcolor: "primary.dark",
            color: "common.white",
            p: { xs: 3, md: 4 },
            borderTop: `4px solid ${theme.palette.orange.main}`,
          }}
        >
          <Typography sx={{ color: "rgba(255,255,255,.68)", mb: 2, fontWeight: 800 }}>
            {t("Academics.Curriculum.Islamic.Islamic")}
          </Typography>
          <Stack direction="row" spacing={1.2} useFlexGap sx={{ flexWrap: "wrap" }}>
            {subjects.map((subject) => (
              <Chip
                key={subject}
                label={subject}
                sx={{ bgcolor: "rgba(255,255,255,.1)", color: "common.white", border: "1px solid rgba(255,255,255,.18)" }}
              />
            ))}
          </Stack>
        </Box>
      </PageSectionColumn>
    </PageSection>
  );
};

export default IslamicSection;
