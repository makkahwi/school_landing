import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/router";

import CardComp from "../common/Card";
import Column from "../common/Column";
import PageSection from "../common/PageSection";
import Row from "../common/Row";
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
    <PageSection py={20} bgcolor="">
      <Row spacing={3}>
        <Column>
          <Text color={theme.palette.orange.main} variant="title">
            {t("landingPage.whyAISSection.title")}
          </Text>

          <Text doubleHeight justify>
            {t("landingPage.whyAISSection.Description")}
          </Text>
        </Column>

        {whyAIS_icons.map((item, i) => (
          <Column lg={4} md={6} key={i}>
            <CardComp bg={theme.palette.orange.main}>
              <Avatar
                variant="square"
                alt={item.alt}
                src={item.src}
                sx={{
                  width: "50%",
                  height: "auto",
                  margin: "auto auto",
                }}
              />

              <Text
                variant="cardTitle"
                center
                color={theme.palette.basic.light}
                mt={4}
                bold
              >
                {item.text}
              </Text>
            </CardComp>
          </Column>
        ))}
      </Row>
    </PageSection>
  );
};

export default WhyAISSection;
