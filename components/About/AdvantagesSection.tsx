import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { aboutPage } from "@/utils/constants";
import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/router";
import { Fragment } from "react";

import CardComp from "../common/Card";
import PageSection from "../common/PageSection";
import PageSectionColumn from "../common/PageSectionColumn";
import Text from "../common/Text";

const AdvantagesSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection bg={theme.palette.basic.light}>
      <PageSectionColumn>
        <Text color={theme.palette.orange.main} variant="title">
          {t("aboutPage.whyAISTitle")}
        </Text>
      </PageSectionColumn>

      {aboutPage.whyAIScards.map((item, i) => (
        <Fragment key={i}>
          <PageSectionColumn md={4}>
            <CardComp bg={theme.palette.orange.main}>
              <Avatar
                variant="square"
                alt={item.alt}
                src={item.src}
                sx={{
                  width: {
                    xs: "35vw",
                    md: "auto",
                  },
                  height: {
                    xs: "35vw",
                    md: "auto",
                  },
                  maxWidth: { md: "12vw" },
                }}
              />

              <Text
                color={theme.palette.basic.light}
                variant="cardtitle"
                center
              >
                {t(item.text)}
              </Text>
            </CardComp>
          </PageSectionColumn>

          <PageSectionColumn md={8}>
            <Text color={theme.palette.orange.main} justify>
              {t(item.longText)}
            </Text>
          </PageSectionColumn>
        </Fragment>
      ))}
    </PageSection>
  );
};

export default AdvantagesSection;
