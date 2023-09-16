import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/router";

import CardComp from "../common/Card";
import PageSection from "../common/PageSection";
import PageSectionColumn from "../common/PageSectionColumn";
import Text from "../common/Text";

const WhyAISSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const whyAIS_icons = [
    {
      src: "/images/Islamic.png",
      alt: "islamic-icon",
      text: t("landingPage.whyAISSection.items.item1"),
    },
    {
      src: "/images/Cambridge.png",
      alt: "cambridge-icon",
      text: t("landingPage.whyAISSection.items.item2"),
    },
    {
      src: "/images/Cheap.png",
      alt: "cheap-zone-icon",
      text: t("landingPage.whyAISSection.items.item3"),
    },
  ];

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
          {whyAIS_icons.map((item, i) => (
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
                  {item.text}
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
