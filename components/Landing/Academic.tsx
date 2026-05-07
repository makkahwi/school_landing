import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Box, Button, Stack } from "@mui/material";
import { useRouter } from "next/router";

import Column from "../common/Column";
import PageSection from "../common/PageSection";
import Row from "../common/Row";
import Text from "../common/Text";

const AcademicSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const actions = [
    { title: t("Academics.StudyLevels.CheckOut"), link: "/academics/study-levels" },
    { title: t("Academics.Curriculum.CheckOut"), link: "/academics/curriculum" },
    { title: t("Academics.CoCurriculum.CheckOut"), link: "/academics/co-curriculum" },
  ];

  return (
    <PageSection bg={theme.palette.basic.light} py={{ xs: 7, md: 8 }} sx={{ borderRadius: "20px", mx: { xs: 2, md: 4 }, boxShadow: "0 12px 28px rgba(28,75,148,0.08)" }}>
      <Row spacing={2.8}>
        <Column lg={12}>
          <Stack spacing={2.5} sx={{ maxWidth: "1050px", mx: "auto" }}>
            <Text color={theme.palette.blue.dark} variant="title" style={{ margin: 0 }}>
              {t("Academics.Title")}
            </Text>

            <Box sx={{ p: { xs: 2.4, md: 3 }, borderRadius: "14px", backgroundColor: theme.palette.blue.main }}>
              <Text doubleHeight justify style={{ margin: 0 }}>
                {t("Academics.StudyLevels.Description")}
              </Text>
            </Box>

            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 1.6 }}>
              {actions.map(({ title, link }, i) => (
                <Button key={i} href={link} variant="contained" fullWidth sx={{ py: 1.5, borderRadius: "12px", textTransform: "none", fontWeight: 700, backgroundColor: theme.palette.blue.dark, color: theme.palette.basic.light, "&:hover": { backgroundColor: theme.palette.orange.main, color: theme.palette.blue.dark } }}>
                  {title}
                </Button>
              ))}
            </Box>
          </Stack>
        </Column>
      </Row>
    </PageSection>
  );
};

export default AcademicSection;
