import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Box, Chip, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";

const CoursesSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const courses = [
    t("Academics.Curriculum.Languages.Title"),
    t("Academics.Curriculum.Islamic.Islamic"),
    t("Academics.Curriculum.Modern.Modern"),
  ];

  return (
    <PageSection sx={{ py: { xs: 6, md: 8 } }}>
      <PageSectionColumn md={8} align="start">
        <Typography
          component="p"
          sx={{
            color: "text.secondary",
            fontSize: { xs: 18, md: 22 },
            lineHeight: 1.75,
            maxWidth: 920,
          }}
        >
          {t("Academics.Curriculum.Description")}
        </Typography>
      </PageSectionColumn>
      <PageSectionColumn md={4} align="start">
        <Box sx={{ width: "100%" }}>
          <Typography sx={{ color: theme.palette.orange.main, fontWeight: 900, mb: 1.5 }}>
            {t("Academics.Curriculum.Title")}
          </Typography>
          <Stack direction="row" spacing={1.2} useFlexGap sx={{ flexWrap: "wrap" }}>
            {courses.map((course) => (
              <Chip
                key={course}
                label={course}
                sx={{
                  bgcolor: "rgba(11,53,88,.08)",
                  color: "primary.dark",
                  border: "1px solid rgba(11,53,88,.14)",
                }}
              />
            ))}
          </Stack>
        </Box>
      </PageSectionColumn>
    </PageSection>
  );
};

export default CoursesSection;
