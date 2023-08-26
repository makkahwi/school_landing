import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { Stack, Container, Typography, Box } from "@mui/material";
import theme from "@/styles/theme";
import { aboutPage } from "@/utils/constants";
import Square from "../shared/Square";
import React from "react";
import Avatar from "@mui/material/Avatar";

const WhyAISSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <Box pt={5} pb={5} bgcolor={theme.palette.basic.light}>
      <Container sx={{ height: "15%" }}>
        <Typography
          fontSize={{
            xs: "10vw",
            md: "3vw",
          }}
          fontWeight="bold"
          color={theme.palette.orange.main}
        >
          {t("aboutPage.whyAISTitle")}
        </Typography>
      </Container>

      <Stack p={5} spacing={{ xs: 10, md: 5 }} alignItems="center">
        {aboutPage.whyAIScards.map((item, index) => {
          return (
            <React.Fragment
              key={`about page whyAIS section item number ${index}`}
            >
              <Stack
                direction={{ xs: "column", md: "row" }}
                width="90%"
                justifyContent="space-evenly"
                spacing={{ xs: 5, md: 0 }}
              >
                <Square
                  bgcolor={theme.palette.orange.main}
                  radius={{
                    mobile: ["4vw", "1.1.1.1"],
                    desktop: ["2vw", "1.1.1.1"],
                  }}
                  sx={{
                    width: { xs: "100%", md: "30%" },
                  }}
                >
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      padding: 3,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Avatar
                      variant="square"
                      alt={item.alt}
                      src={item.src}
                      sx={{
                        width: {
                          xs: "35vw",
                          md: "auto",
                        },
                        height: {
                          xs: "35vw",
                          md: "auto",
                        },
                        maxWidth: { md: "12vw" },
                      }}
                    />
                    <Typography
                      mt={2}
                      variant="h6"
                      textAlign="center"
                      color={theme.palette.basic.light}
                    >
                      {t(item.text)}
                    </Typography>
                  </Stack>
                </Square>

                <Typography
                  textAlign="justify"
                  width={{ xs: "100%", md: "60%" }}
                  color={theme.palette.orange.main}
                  fontWeight="bold"
                  fontSize={{
                    xs: "5vw",
                    md: "1.5vw",
                  }}
                >
                  {t(item.longText)}
                </Typography>
              </Stack>
            </React.Fragment>
          );
        })}
      </Stack>
    </Box>
  );
};

export default WhyAISSection;
