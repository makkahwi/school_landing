import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";

import Row from "../common/Row";

interface FeeCardsProps {
  templateId: string;
  bg?: string;
  cardBg?: string;
  boxes: {
    title: string;
    items: {
      title: string;
      price: string;
      description: string;
    }[];
  }[];
  currency?: boolean;
}

const FeeCards = ({ boxes, currency }: FeeCardsProps) => {
  const router = useRouter();
  const { t } = useTranslation(router);
  const isArabic = router.locale === "ar";

  const formatPrice = (price: string) =>
    currency
      ? isArabic
        ? `${price} ${t("Engage.Fees.Currency")}`
        : `${t("Engage.Fees.Currency")} ${price}`
      : price;

  return (
    <Row p={0}>
      <Box sx={{ width: "100%", maxWidth: 1120, mx: "auto" }}>
        <Stack spacing={4}>
          {boxes.map((box) => (
            <Box key={box.title}>
              <Typography
                component="h3"
                sx={{
                  color: "primary.dark",
                  fontSize: { xs: 24, md: 32 },
                  fontWeight: 850,
                  mb: 2,
                }}
              >
                {box.title}
              </Typography>
              <Box
                sx={{
                  bgcolor: "background.paper",
                  borderTop: `3px solid ${theme.palette.orange.main}`,
                }}
              >
                {box.items.map((item, index) => (
                  <Box key={`${box.title}-${item.title}`}>
                    <Stack
                      direction={{ xs: "column", md: "row" }}
                      spacing={{ xs: 1.2, md: 3 }}
                      sx={{
                        px: { xs: 2, md: 3 },
                        py: { xs: 2.2, md: 2.6 },
                        alignItems: { xs: "flex-start", md: "center" },
                        justifyContent: "space-between",
                      }}
                    >
                      <Box sx={{ minWidth: 0 }}>
                        <Typography
                          sx={{
                            color: "text.primary",
                            fontSize: { xs: 17, md: 19 },
                            fontWeight: 800,
                            lineHeight: 1.35,
                          }}
                        >
                          {item.title}
                        </Typography>
                        {item.description && (
                          <Typography sx={{ mt: 0.6, color: "text.secondary", lineHeight: 1.65 }}>
                            {item.description}
                          </Typography>
                        )}
                      </Box>
                      <Typography
                        sx={{
                          color: theme.palette.orange.main,
                          fontSize: { xs: 20, md: 24 },
                          fontWeight: 900,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {formatPrice(item.price)}
                      </Typography>
                    </Stack>
                    {index < box.items.length - 1 && <Divider />}
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Row>
  );
};

export default FeeCards;
