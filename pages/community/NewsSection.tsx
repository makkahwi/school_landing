import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { Stack, Typography, Avatar } from "@mui/material";
import theme from "@/styles/theme";
import Square from "../../components/common/Square";
import React from "react";
import { communityPage } from "@/utils/constants";
import PageSection from "../../components/common/pageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import CardComp from "../../components/common/Card";

const NewsSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection>
      {communityPage.latestNews.map((item, i) => (
        <PageSectionColumn key={i}>
          <PageSection>
            <PageSectionColumn md={4}>
              <Avatar
                variant="square"
                src={item.src}
                sx={{
                  width: "90%",
                  height: "auto",
                }}
              />
              <Typography
                color={theme.palette.blue.dark}
                fontWeight="bold"
                textAlign="center"
                fontSize={{ xs: "3vw", md: "3vw" }}
                width="auto"
                p={2}
              >
                {t(item.title)}
              </Typography>

              <Typography
                color={theme.palette.blue.dark}
                fontWeight="bold"
                textAlign="center"
                fontSize={{ xs: "3vw", md: "2vw" }}
                width="auto"
                p={2}
              >
                {item.date}
              </Typography>
            </PageSectionColumn>

            <PageSectionColumn md={8}>
              <CardComp bg={theme.palette.blue.dark}>
                {item.description.map((paragraph, y) => (
                  <Typography
                    color={theme.palette.basic.light}
                    textAlign="justify"
                    fontSize={{
                      xs: "3vw",
                      md: "1.5vw",
                    }}
                    width="auto"
                    p={2}
                    key={y}
                  >
                    {t(paragraph)}
                  </Typography>
                ))}
              </CardComp>
            </PageSectionColumn>
          </PageSection>
        </PageSectionColumn>
      ))}
    </PageSection>
  );
};

export default NewsSection;
