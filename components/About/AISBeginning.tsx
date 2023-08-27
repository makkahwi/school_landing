import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { useRouter } from "next/router";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import Text from "../common/Text";

const AISBeginning = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection bg="">
      <PageSectionColumn>
        <Text color={theme.palette.orange.main} variant="title">
          {t("aboutPage.beginningAISTitle")}
        </Text>
      </PageSectionColumn>

      {["1", "2", "3"].map((_, i) => (
        <PageSectionColumn key={i}>
          <Text color={theme.palette.orange.main} justify>
            {t(`aboutPage.foundingStory.paragraph${i + 1}`)}
          </Text>
        </PageSectionColumn>
      ))}
    </PageSection>
  );
};

export default AISBeginning;
