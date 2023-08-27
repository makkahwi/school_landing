import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { curriculumPage } from "@/utils/constants";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../../components/common/pageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import Square from "../../components/common/Square";

const CoursesSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection>
      <PageSectionColumn>
        <Typography
          color={theme.palette.orange.main}
          fontWeight="bold"
          fontSize={{ xs: "8vw", md: "2vw" }}
        >
          {t("curriculumPage.courses")}
        </Typography>
      </PageSectionColumn>

      {curriculumPage.courseSquares.map((item, i) => (
        <PageSectionColumn md={4} key={i}>
          <Square
            bgcolor={theme.palette.orange.main}
            radius={{
              mobile: ["10vw", item.edges],
              desktop: ["3vw", item.edges],
            }}
            sx={{
              margin: 0,
              width: { xs: "60vw", md: "15vw" },
              height: { xs: "60vw", md: "15vw" },
            }}
          >
            <Typography
              fontWeight="bold"
              m={0}
              fontSize={{ xs: "7vw", md: "1.7vw" }}
              color={theme.palette.basic.light}
            >
              {t(item.text)}
            </Typography>
          </Square>
        </PageSectionColumn>
      ))}
    </PageSection>
  );
};

export default CoursesSection;
