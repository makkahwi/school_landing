import Column from "@/components/common/Column";
import PageSection from "@/components/common/PageSection";
import Row from "@/components/common/Row";
import Text from "@/components/common/Text";
import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import Avatar from "@mui/material/Avatar";
import { Box, Stack } from "@mui/material";
import { useRouter } from "next/router";

const AboutSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const features = [
    { src: "/images/Islamic.png", alt: "islamic-icon", text: t("About.WhyAIS.Islamic.Title") },
    { src: "/images/Cambridge.png", alt: "cambridge-icon", text: t("About.WhyAIS.Cambridge.Title") },
    { src: "/images/Cheap.png", alt: "cheap-zone-icon", text: t("About.WhyAIS.Reasonable.Title") },
  ];

  return (
    <PageSection bg={theme.palette.basic.light} py={8} sx={{ borderRadius: "16px", mx: { xs: 1.5, md: 3 }, border: `1px solid ${theme.palette.basic.main}` }}>
      <Row spacing={3}>
        <Column lg={12}>
          <Box sx={{ maxWidth: "920px", mx: "auto" }}>
            <Text color={theme.palette.blue.dark} variant="title" center>
              {t("About.Title")}
            </Text>
            <Text doubleHeight justify>
              {t("About.Description")}
            </Text>
          </Box>
        </Column>

        <Column lg={12} p={1}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }, gap: 2, maxWidth: "1100px", mx: "auto" }}>
            {features.map((item, i) => (
              <Stack
                key={i}
                spacing={2}
                alignItems="center"
                justifyContent="center"
                sx={{
                  minHeight: "235px",
                  p: { xs: 2.5, md: 3 },
                  borderRadius: "14px",
                  border: `1px solid ${theme.palette.orange.main}`,
                  backgroundColor: theme.palette.blue.dark,
                  textAlign: "center",
                }}
              >
                <Avatar variant="square" alt={item.alt} src={item.src} sx={{ width: { xs: "36%", md: "42%" }, height: "auto" }} />
                <Text variant="cardTitle" color={theme.palette.basic.light} center bold style={{ margin: 0 }}>
                  {item.text}
                </Text>
              </Stack>
            ))}
          </Box>
        </Column>
      </Row>
    </PageSection>
  );
};

export default AboutSection;
