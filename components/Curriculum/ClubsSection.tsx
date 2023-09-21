import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { curriculumPage } from "@/utils/constants";
import { useRouter } from "next/router";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import StaticList from "../common/StaticList";
import Text from "../common/Text";

const ClubsSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection bg={theme.palette.blue.dark}>
      <PageSectionColumn>
        <Text color={theme.palette.basic.light} variant="title">
          {t("curriculumPage.clubs")}
        </Text>
      </PageSectionColumn>

      <PageSectionColumn>
        <StaticList
          items={curriculumPage.clubsItems("50%", theme.palette.basic.light)}
        />
      </PageSectionColumn>
    </PageSection>
  );
};

export default ClubsSection;
