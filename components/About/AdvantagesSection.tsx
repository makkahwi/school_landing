import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../common/PageSection";
import PageSectionColumn from "../common/PageSectionColumn";
import Text from "../common/Text";

const AdvantagesSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const whyAIScards = [
    {
      src: "/images/Islamic.png",
      alt: "islamic-icon",
      text: t("About.WhyAIS.Islamic.Title"),
      longText: t("About.WhyAIS.Islamic.Description"),
    },
    {
      src: "/images/Cambridge.png",
      alt: "cambridge-icon",
      text: t("About.WhyAIS.Cambridge.Title"),
      longText: t("About.WhyAIS.Cambridge.Description"),
    },
    {
      src: "/images/Cheap.png",
      alt: "cheap-zone-icon",
      text: t("About.WhyAIS.Reasonable.Title"),
      longText: t("About.WhyAIS.Reasonable.Description"),
    },
  ];

  return (
    <PageSection bg={theme.palette.basic.light} sx={{ py: { xs: 7, md: 9 } }}>
      <PageSectionColumn md={4} align="start" justify="start">
        <Text color={theme.palette.orange.main} variant="title" style={{ marginBottom: 8 }}>
          {t("About.WhyAIS.Title")}
        </Text>
        <Typography sx={{ color: "text.secondary", lineHeight: 1.8, maxWidth: 420 }}>
          {t("About.Description")}
        </Typography>
      </PageSectionColumn>

      <PageSectionColumn md={8} p={{ xs: 2, md: 3 }}>
        <Stack
          divider={<Divider sx={{ borderColor: "rgba(11,53,88,.16)" }} />}
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            borderTop: `4px solid ${theme.palette.orange.main}`,
            px: { xs: 2.5, md: 4 },
          }}
        >
          {whyAIScards.map((item, i) => (
            <Stack
              key={item.text}
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 2, md: 4 }}
              sx={{ py: { xs: 3, md: 4 }, alignItems: "flex-start" }}
            >
              <Box
                component="img"
                src={item.src}
                alt={item.alt}
                sx={{ width: 58, height: 58, objectFit: "contain", flex: "0 0 auto" }}
              />
              <Box>
                <Typography
                  component="h3"
                  sx={{
                    color: "primary.dark",
                    fontSize: { xs: 22, md: 28 },
                    lineHeight: 1.2,
                    fontWeight: 850,
                    mb: 1.2,
                  }}
                >
                  {item.text}
                </Typography>
                <Typography sx={{ color: "text.secondary", lineHeight: 1.85 }}>
                  {item.longText}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
      </PageSectionColumn>
    </PageSection>
  );
};

export default AdvantagesSection;
