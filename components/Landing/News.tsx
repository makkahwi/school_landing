import PageSection from "@/components/common/PageSection";
import Square from "@/components/common/Square";
import Text from "@/components/common/Text";
import { latestNews } from "@/components/Community/NewsSection";
import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Box, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { NewsAnimation, NewsArrowStyles, NewsGridStyles, PageFlipComponent } from "./styles";

const NewsSection = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const router = useRouter();
  const { t } = useTranslation(router);

  const arrowClickHandler = (arrow: string) => {
    if (arrow === "left") {
      setCurrentPhoto((prev) => (prev === 0 ? latestNews.length - 1 : prev - 1));
    } else {
      setCurrentPhoto((prev) => (prev === latestNews.length - 1 ? 0 : prev + 1));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => arrowClickHandler("right"), 8000);
    return () => clearInterval(interval);
  }, []);

  const squares = [
    { radiusMobile: ["1.5vw", "1.1.0.1"], radiusDesktop: ["0.8vw", "1.1.0.1"], bgcolor: theme.palette.brown.main, rows: "3 / 5", cols: "8 / 10" },
    { radiusMobile: ["1.5vw", "1.1.0.1"], radiusDesktop: ["1.5vw", "1.1.0.1"], bgcolor: theme.palette.blue.dark, rows: "1 / 5", cols: "10 / 14" },
    { radiusMobile: ["1.5vw", "1.1.0.1"], radiusDesktop: ["1.2vw", "1.1.1.0"], bgcolor: theme.palette.orange.main, rows: "2 / 5", cols: "14 / 17" },
  ];

  return (
    <PageSection bg={theme.palette.basic.light} py={8}>
      <Stack justifyContent="center" sx={{ width: "100%" }}>
        <Box sx={NewsGridStyles}>
          <Square bgcolor={theme.palette.orange.main} radius={{ mobile: ["4vw", "1.0.1.1"], desktop: ["2vw", "1.0.1.1"] }} sx={{ gridRow: "5 / 15", gridColumn: "4 / 14" }}>
            <Text color={theme.palette.basic.light} variant="subtitle" center>
              {t("News.News")}
            </Text>
          </Square>

          {squares.map((block, i) => (
            <Square key={i} bgcolor={block.bgcolor} radius={{ mobile: block.radiusMobile, desktop: block.radiusDesktop }} sx={{ gridRow: block.rows, gridColumn: block.cols }} />
          ))}

          <Square bgcolor={theme.palette.blue.dark} radius={{ mobile: ["5vw", "0.1.1.1"], desktop: ["2.8vw", "0.1.1.1"] }} sx={{ gridRow: "5 / 20", gridColumn: "14 / 38" }}>
            <PageFlipComponent>
              <IconButton onClick={() => arrowClickHandler("left")} sx={{ ...NewsArrowStyles, left: "0.35rem" }}>
                <ArrowCircleLeftIcon sx={{ width: "100%", height: "100%" }} />
              </IconButton>

              <Avatar
                variant="square"
                sx={{
                  width: "90%",
                  height: "auto",
                  borderRadius: { xs: "14px", md: "0 3vw 3vw 3vw" },
                  animation: `${NewsAnimation} 0.8s both ease`,
                }}
                src={latestNews[currentPhoto].src}
              />

              <IconButton onClick={() => arrowClickHandler("right")} sx={{ ...NewsArrowStyles, right: "0.35rem" }}>
                <ArrowCircleRightIcon sx={{ width: "100%", height: "100%" }} />
              </IconButton>
            </PageFlipComponent>
          </Square>
        </Box>

        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", mt: 1 }}>
          <Link href={`/news/${t(latestNews[currentPhoto].title).replaceAll(" ", "_")}`}>
            <Text variant="cardtitle" color={theme.palette.blue.dark} center>
              {t(latestNews[currentPhoto].title)}
            </Text>
          </Link>
        </Box>
      </Stack>
    </PageSection>
  );
};

export default NewsSection;
