import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { curriculumPage } from "@/utils/constants";
import { useRouter } from "next/router";

import PageSection from "../common/PageSection";
import PageSectionColumn from "../common/PageSectionColumn";
import StaticList from "../common/StaticList";
import Text from "../common/Text";

const ActivitiesSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection bg={theme.palette.orange.main}>
      <PageSectionColumn>
        <Text color={theme.palette.brown.main} variant="title">
          {t("curriculumPage.activities")}
        </Text>
      </PageSectionColumn>

      <PageSectionColumn>
        <StaticList
          items={curriculumPage.activitiesItems(
            "50%",
            theme.palette.brown.main
          )}
          color={theme.palette.brown.main}
        />
      </PageSectionColumn>
    </PageSection>
  );
};

export default ActivitiesSection;
