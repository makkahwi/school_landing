import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { useRouter } from "next/router";

import Column from "../common/Column";
import PageSection from "../common/PageSection";
import Row from "../common/Row";
import Text from "../common/Text";
import { Button, Box } from "@mui/material";

const AcademicSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const buttons = [
    { title: t("Academics.StudyLevels.CheckOut"), link: "/academics/study-levels" },
    { title: t("Academics.Curriculum.CheckOut"), link: "/academics/curriculum" },
    { title: t("Academics.CoCurriculum.CheckOut"), link: "/academics/co-curriculum" },
  ];

  return (
    <PageSection py={10} sx={{ backgroundColor: theme.palette.blue.main }}>
      <Row spacing={2}>
        <Column>
          <Text color={theme.palette.blue.dark} variant="title" center>
            {t("Academics.Title")}
          </Text>
        </Column>

        <Column lg={12} p={1}>
          <Box sx={{ maxWidth: "980px", mx: "auto" }}>
            <Text doubleHeight justify>
              {t("Academics.StudyLevels.Description")}
            </Text>
          </Box>
        </Column>

        {buttons.map(({ title, link }, i) => (
          <Column lg={4} md={6} key={i} p={2}>
            <Button
              variant="contained"
              size="large"
              href={link}
              fullWidth
              sx={{
                py: 2.2,
                borderRadius: "16px",
                backgroundColor: theme.palette.blue.dark,
                color: theme.palette.basic.light,
                fontWeight: 700,
                boxShadow: "0 16px 30px rgba(24,146,206,0.3)",
                "&:hover": { backgroundColor: theme.palette.brown.main },
              }}
            >
              {title}
            </Button>
          </Column>
        ))}
      </Row>
    </PageSection>
  );
};

export default AcademicSection;
