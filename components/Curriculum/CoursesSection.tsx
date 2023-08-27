import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { curriculumPage } from "@/utils/constants";
import { useRouter } from "next/router";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import Square from "../../components/common/Square";
import Text from "../common/Text";

const CoursesSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection>
      <PageSectionColumn>
        <Text color={theme.palette.orange.main} variant="subtitle">
          {t("curriculumPage.courses")}
        </Text>
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
            <Text color={theme.palette.basic.light} variant="subtitle">
              {t(item.text)}
            </Text>
          </Square>
        </PageSectionColumn>
      ))}
    </PageSection>
  );
};

export default CoursesSection;
