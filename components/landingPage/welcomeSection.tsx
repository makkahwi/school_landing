import {
  GridLayoutStyles,
  SquaresShape,
} from "@/components/landingPage/styles";
import useTranslation from "@/hooks/useTranslation";
import { landingPage } from "@/utils/constants";
import { Box, Container, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import React from "react";

import Square from "../common/Square";

const WelcomeSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);
  const theme = useTheme();

  return (
    <Stack
      id="top-container"
      pt={{ xs: 15, md: 7 }}
      pb={15}
      direction={{ xs: "column", md: "row" }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Stack
          p={4}
          spacing={3}
          sx={{
            height: { xs: "auto", md: "75vh" },
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Avatar
            alt="Main Logo"
            src="/global/logo.png"
            sx={{
              width: { xs: "20vw", md: "8vw" },
              height: { xs: "20vw", md: "8vw" },
            }}
          />

          <Typography
            variant="h3"
            color={theme.palette.blue.dark}
            fontWeight="bold"
            align="center"
            pt={3}
            lineHeight={2}
          >
            {t("landingPage.welcomeSection.title")}
          </Typography>
        </Stack>
      </Container>

      <SquaresShape sx={{ width: { xs: "100%", md: "50%" } }}>
        <Box sx={GridLayoutStyles}>
          <Square
            radius={{
              mobile: ["4vw", "1.1.0.1"],
              desktop: ["2vw", "1.1.0.1"],
            }}
            sx={{
              gridRow: "1 / 16",
              gridColumn: "1 / 20",
            }}
          >
            <Avatar
              variant="square"
              alt="Main Image"
              src={"https://aqsa.edu.my/wp-content/uploads/2019/04/Photo-7.jpg"}
              sx={{
                width: "100%",
                height: "100%",
              }}
            />
          </Square>

          {landingPage.welcomeSquares.map((block, index) => {
            return (
              <React.Fragment key={`welcome square page-1 number: ${index}`}>
                <Square
                  bgcolor={block.bgcolor}
                  radius={{
                    mobile: block.radiusMobile,
                    desktop: block.radiusDesktop,
                  }}
                  sx={{
                    gridRow: block.rows,
                    gridColumn: block.cols,
                  }}
                />
              </React.Fragment>
            );
          })}
        </Box>
      </SquaresShape>
    </Stack>
  );
};

export default WelcomeSection;
