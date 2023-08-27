import CardComp from "@/components/common/Card";
import PageSection from "@/components/common/PageSection";
import PageSectionColumn from "@/components/common/PageSectionColumn";
import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { aboutPage } from "@/utils/constants";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";

import Text from "../common/Text";

const VisionMissionObjectives = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection>
      {["vision", "mission"].map((item, i) => (
        <PageSectionColumn md={6} key={i}>
          <CardComp bg={theme.palette.orange.main}>
            <Text color={theme.palette.basic.light} variant="cardTitle" center>
              {t(`aboutPage.${item}.title`)}
            </Text>

            <Text color={theme.palette.basic.light} justify>
              {t(`aboutPage.${item}.text`)}
            </Text>
          </CardComp>
        </PageSectionColumn>
      ))}

      <PageSectionColumn>
        <Text color={theme.palette.orange.main} variant="title">
          {t("aboutPage.objectives.title")}
        </Text>
      </PageSectionColumn>

      {aboutPage.objectives.map((item, i) => (
        <PageSectionColumn md={4} key={i}>
          <CardComp bg={theme.palette.orange.main}>
            {item.icon}

            <Text color={theme.palette.basic.light} variant="cardTitle" center>
              {t(item.title)}
            </Text>

            <Text color={theme.palette.basic.light} justify>
              {t(item.text)}
            </Text>
          </CardComp>
        </PageSectionColumn>
      ))}
    </PageSection>
  );
};

export default VisionMissionObjectives;
