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
    <PageSection bg={theme.palette.blue.main} py={9}>
      <Row spacing={2}>
        <Column lg={12}>
          <Box
            sx={{
              maxWidth: "1120px",
              mx: "auto",
              backgroundColor: theme.palette.basic.light,
              border: `1px solid ${theme.palette.basic.main}`,
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                backgroundColor: theme.palette.blue.dark,
                px: { xs: 2.5, md: 4 },
                py: { xs: 2, md: 2.4 },
              }}
            >
              <Text variant="title" color={theme.palette.basic.light} center style={{ margin: 0 }}>
                {t("Academics.Title")}
              </Text>
            </Box>

            <Box sx={{ p: { xs: 2.5, md: 4 } }}>
              <Text doubleHeight justify style={{ marginTop: 0 }}>
                {t("Academics.StudyLevels.Description")}
              </Text>

              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={1.5}
                sx={{ mt: 2 }}
              >
                {actions.map(({ title, link }, i) => (
                  <Button
                    key={i}
                    href={link}
                    variant="outlined"
                    fullWidth
                    sx={{
                      py: 1.4,
                      borderRadius: "10px",
                      borderWidth: "2px",
                      borderColor: theme.palette.blue.dark,
                      color: theme.palette.blue.dark,
                      fontWeight: 700,
                      backgroundColor: theme.palette.basic.light,
                      "&:hover": {
                        borderColor: theme.palette.orange.main,
                        backgroundColor: theme.palette.orange.main,
                        color: theme.palette.blue.dark,
                      },
                    }}
                  >
                    {title}
                  </Button>
                ))}
              </Stack>
            </Box>
          </Box>
        </Column>
      </Row>
    </PageSection>
  );
};

export default AcademicSection;
