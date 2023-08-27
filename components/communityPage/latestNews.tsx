import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { Stack, Typography, Avatar } from "@mui/material";
import theme from "@/styles/theme";
import Square from "../common/Square";
import React from "react";
import { communityPage } from "@/utils/constants";

const LatestNews = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <Stack spacing={5} width="100%" pt={10}>
      {communityPage.latestNews.map((item, index) => (
        <React.Fragment key={`community news item number: ${index}`}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            p={5}
            justifyContent={{ xs: "center", md: "center" }}
            alignItems={{ xs: "center", md: "flex-start" }}
            width="100%"
          >
            <Stack width="30%">
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

              <Avatar
                variant="square"
                src={item.src}
                sx={{
                  width: "90%",
                  height: "auto",
                }}
              />
            </Stack>

            <Square
              bgcolor={theme.palette.blue.dark}
              radius={{
                mobile: ["6vw", "1.1.1.1"],
                desktop: ["2vw", "1.1.1.1"],
              }}
              sx={{
                width: "70%",
              }}
            >
              <Stack width="100%">
                <Typography
                  color={theme.palette.basic.light}
                  fontWeight="bold"
                  textAlign="center"
                  fontSize={{ xs: "3vw", md: "3vw" }}
                  width="auto"
                  p={2}
                >
                  {t(item.title)}
                </Typography>

                {item.description.map((paragraph, parIndex) => (
                  <React.Fragment
                    key={`community news paragraph item number: ${parIndex}`}
                  >
                    <Typography
                      color={theme.palette.basic.light}
                      textAlign="justify"
                      fontSize={{
                        xs: "3vw",
                        md: "1.5vw",
                      }}
                      width="auto"
                      p={2}
                    >
                      {t(paragraph)}
                    </Typography>
                  </React.Fragment>
                ))}
              </Stack>
            </Square>
          </Stack>
        </React.Fragment>
      ))}
    </Stack>
  );
};

export default LatestNews;
