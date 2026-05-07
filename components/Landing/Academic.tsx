import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { useRouter } from "next/router";

import Column from "../common/Column";
import PageSection from "../common/PageSection";
import Row from "../common/Row";
import Text from "../common/Text";
import { Button, Box, Stack } from "@mui/material";

const AcademicSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const buttons = [
    { title: t("Academics.StudyLevels.CheckOut"), link: "/academics/study-levels" },
    { title: t("Academics.Curriculum.CheckOut"), link: "/academics/curriculum" },
    { title: t("Academics.CoCurriculum.CheckOut"), link: "/academics/co-curriculum" },
  ];

  return (
    <PageSection bg={theme.palette.blue.main} py={8}>
      <Row spacing={2}>
        <Column lg={12} p={1}>
          <Stack
            sx={{
              backgroundColor: theme.palette.basic.light,
              border: `1px solid ${theme.palette.basic.main}`,
              borderRadius: "14px",
              p: { xs: 2.5, md: 4 },
              maxWidth: "1020px",
              mx: "auto",
            }}
            spacing={2.5}
          >
            <Text color={theme.palette.blue.dark} variant="title" center>
              {t("Academics.Title")}
            </Text>

            <Text doubleHeight justify>
              {t("Academics.StudyLevels.Description")}
            </Text>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                gap: 1.5,
              }}
            >
              {buttons.map(({ title, link }, i) => (
                <Button
                  key={i}
                  variant="contained"
                  size="large"
                  href={link}
                  fullWidth
                  sx={{
                    py: 1.5,
                    borderRadius: "10px",
                    backgroundColor: theme.palette.blue.dark,
                    color: theme.palette.basic.light,
                    fontWeight: 700,
                    "&:hover": { backgroundColor: theme.palette.orange.main, color: theme.palette.blue.dark },
                  }}
                >
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
