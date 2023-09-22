import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { useRouter } from "next/router";

import Column from "../common/Column";
import PageSection from "../common/PageSection";
import Row from "../common/Row";
import Text from "../common/Text";

const AcademicSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const contents = [
    {
      title: t("Academics.StudyLevels.Title"),
      desc: t("Academics.StudyLevels.Description"),
    },
    {
      title: t("Academics.Curriculum.Title"),
      desc: t("Academics.Curriculum.Description"),
    },
    {
      title: t("Academics.CoCurriculum.Title"),
      desc: t("Academics.CoCurriculum.Description"),
    },
  ];

  return (
    <PageSection py={20}>
      <Row spacing={3}>
        <Column>
          <Text color={theme.palette.orange.main} variant="title">
            {t("Academics.Title")}
          </Text>
        </Column>

        {contents.map(({ title, desc }, i) => (
          <Column lg={4} key={i}>
            <Text color={theme.palette.blue.dark} variant="cardTitle" bold>
              {title}
            </Text>

            <Text doubleHeight justify>
              {desc}
            </Text>
          </Column>
        ))}
      </Row>
    </PageSection>
  );
};

export default AcademicSection;
