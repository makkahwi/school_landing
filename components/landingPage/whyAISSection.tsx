import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { Stack, Container, Typography, Box } from "@mui/material";
import theme from "@/styles/theme";
import { landingPage } from "@/utils/constants";
import Square from "../shared/Square";
import React from "react";
import Avatar from "@mui/material/Avatar";
import { Fragment } from "react";

const WhyAISSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <Box
      py={20}
      bgcolor={theme.palette.basic.light}
      sx={{
        height: { xs: "auto", md: "100vh" },
      }}
    >
      <Container sx={{ height: "15%" }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          color={theme.palette.orange.main}
          sx={{
            textShadow: `0px 0px 2px ${theme.palette.orange.main}`,
          }}
        >
          {t("landingPage.whyAISSection.title")}
        </Typography>

        <Typography
          textAlign="justify"
          color={theme.palette.basic.dark}
          fontSize={{ xs: "6vw", md: "1.25vw" }}
          mt={6}
        >
          {t("landingPage.whyAISSection.discription")}
        </Typography>
      </Container>

      <Stack
        p={5}
        spacing={{ xs: 10, md: 0 }}
        justifyContent="space-evenly"
        alignItems={{ xs: "center", md: "center" }}
        direction={{ xs: "column", md: "row" }}
        sx={{ height: { xs: "auto", md: "80%" } }}
      >
        {landingPage.whyAIS_icons.map((item, index) => (
          <Fragment key={`whyAIS section item number ${index}`}>
            <Square
              bgcolor={theme.palette.orange.main}
              radius={{
                mobile: ["4vw", "1.1.1.1"],
                desktop: ["2vw", "1.1.1.1"],
              }}
              sx={{
                width: { xs: "100%", md: "20%" },
                height: "90%",
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
                    width: { xs: "35vw", md: "auto" },
                    height: { xs: "35vw", md: "auto" },
                    maxWidth: { md: "12vw" },
                  }}
                />

                <Typography
                  mt={2}
                  variant="h6"
                  textAlign="center"
                  color={theme.palette.basic.light}
                  fontWeight="bold"
                >
                  {t(item.text)}
                </Typography>
              </Stack>
            </Square>
          </Fragment>
        ))}
      </Stack>
    </Box>
  );
};

export default WhyAISSection;
