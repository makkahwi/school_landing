import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { useRouter } from "next/router";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import Text from "../common/Text";

const AISBeginning = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const paragraphs = [
    t(`aboutPage.foundingStory.paragraph1`),
    t(`aboutPage.foundingStory.paragraph2`),
    t(`aboutPage.foundingStory.paragraph3`),
  ];

  return (
    <PageSection bg="">
      <PageSectionColumn>
        <Text color={theme.palette.orange.main} variant="title">
          {t("aboutPage.beginningAISTitle")}
        </Text>
      </PageSectionColumn>

      {paragraphs.map((text, i) => (
        <PageSectionColumn key={i}>
          <Text color={theme.palette.orange.main} justify>
            {text}
          </Text>
        </PageSectionColumn>
      ))}
    </PageSection>
  );
};

export default AISBeginning;
