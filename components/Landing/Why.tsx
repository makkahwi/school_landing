import CardComp from "@/components/common/Card";
import Column from "@/components/common/Column";
import PageSection from "@/components/common/PageSection";
import Row from "@/components/common/Row";
import Text from "@/components/common/Text";
import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";
import { useRouter } from "next/router";

const AboutSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const cards = [
    { src: "/images/Islamic.png", alt: "islamic-icon", text: t("About.WhyAIS.Islamic.Title") },
    { src: "/images/Cambridge.png", alt: "cambridge-icon", text: t("About.WhyAIS.Cambridge.Title") },
    { src: "/images/Cheap.png", alt: "cheap-zone-icon", text: t("About.WhyAIS.Reasonable.Title") },
  ];

  return (
    <PageSection bg={theme.palette.basic.light} py={8}>
      <Row spacing={2.5}>
        <Column>
          <Box sx={{ maxWidth: "920px", mx: "auto" }}>
            <Text color={theme.palette.blue.dark} variant="title" center>
              {t("About.Title")}
            </Text>
            <Text doubleHeight justify>
              {t("About.Description")}
            </Text>
          </Box>
        </Column>

        {cards.map((item, i) => (
          <Column sm={6} lg={4} key={i} p={1.5}>
            <CardComp bg={theme.palette.basic.light}>
              <Box
                sx={{
                  borderTop: `4px solid ${theme.palette.orange.main}`,
                  borderRadius: "10px",
                  pt: 2,
                }}
              >
                <Avatar variant="square" alt={item.alt} src={item.src} sx={{ width: "42%", height: "auto", margin: "0 auto" }} />
                <Text variant="cardTitle" center color={theme.palette.blue.dark} mt={2.5} bold>
                  {item.text}
                </Text>
              </Box>
            </CardComp>
          </Column>
        ))}
      </Row>
    </PageSection>
  );
};

export default AboutSection;
