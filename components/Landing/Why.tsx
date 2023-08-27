import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { landingPage } from "@/utils/constants";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/router";

import CardComp from "../common/Card";
import PageSection from "../common/pageSection";
import PageSectionColumn from "../common/PageSectionColumn";

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
        <Typography
          variant="h3"
          fontWeight="bold"
          color={theme.palette.orange.main}
        >
          {t("landingPage.whyAISSection.title")}
        </Typography>

        <Typography
          textAlign="justify"
          color={theme.palette.basic.dark}
          fontSize={{ xs: "6vw", md: "1.25vw" }}
          mt={6}
        >
          {t("landingPage.whyAISSection.discription")}
        </Typography>
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

                <Typography
                  mt={4}
                  variant="h6"
                  textAlign="center"
                  color={theme.palette.basic.light}
                  fontWeight="bold"
                >
                  {t(item.text)}
                </Typography>
              </CardComp>
            </PageSectionColumn>
          ))}
        </Grid>
      </PageSectionColumn>
    </PageSection>
  );
};

export default WhyAISSection;
