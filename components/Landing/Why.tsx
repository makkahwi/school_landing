import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { landingPage } from "@/utils/constants";
import { Grid, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/router";

import CardComp from "../common/Card";
import PageSection from "../common/PageSection";
import PageSectionColumn from "../common/PageSectionColumn";
import Text from "../common/Text";

const WhyAISSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection
      py={20}
      bgcolor=""
      sx={{
        height: { xs: "auto", md: "100vh" },
      }}
    >
      <PageSectionColumn>
        <Text color={theme.palette.orange.main} variant="title">
          {t("landingPage.whyAISSection.title")}
        </Text>

        <Text>{t("landingPage.whyAISSection.discription")}</Text>
      </PageSectionColumn>

      <PageSectionColumn>
        <Grid container spacing={3}>
          {landingPage.whyAIS_icons.map((item, i) => (
            <PageSectionColumn lg={4} md={6} key={i}>
              <CardComp bg={theme.palette.orange.main}>
                <Avatar
                  variant="square"
                  alt={item.alt}
                  src={item.src}
                  sx={{
                    width: "50%",
                    height: "auto",
                  }}
                />

                <Text
                  variant="cardTitle"
                  center
                  color={theme.palette.basic.light}
                >
                  {t(item.text)}
                </Text>
              </CardComp>
            </PageSectionColumn>
          ))}
        </Grid>
      </PageSectionColumn>
    </PageSection>
  );
};

export default WhyAISSection;
