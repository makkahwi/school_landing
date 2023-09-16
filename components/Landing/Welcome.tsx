import { GridLayoutStyles, SquaresShape } from "@/components/Landing/styles";
import useTranslation from "@/hooks/useTranslation";
import { landingPage } from "@/utils/constants";
import { Box, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import React from "react";

import PageSection from "../common/PageSection";
import PageSectionColumn from "../common/PageSectionColumn";
import Square from "../common/Square";
import Text from "../common/Text";

const WelcomeSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);
  const theme = useTheme();

  return (
    <PageSection>
      <PageSectionColumn xs={12} lg={6}>
        <Stack spacing={3} alignItems="center" justifyContent="center">
          <Avatar
            alt="Main Logo"
            src="/images/AIS-Favcion-Logo.png"
            sx={{
              width: { xs: "20vw", md: "12vw" },
              height: { xs: "20vw", md: "12vw" },
            }}
          />

          <Text color={theme.palette.blue.dark} variant="subtitle" center>
            {t("landingPage.welcomeSection.title")}
          </Text>
        </Stack>
      </PageSectionColumn>

      <PageSectionColumn md={6}>
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
                src={"/images/Photo-9.jpg"}
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Square>

            {landingPage.welcomeSquares.map((block, i) => (
              <React.Fragment key={i}>
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
            ))}
          </Box>
        </SquaresShape>
      </PageSectionColumn>
    </PageSection>
  );
};

export default WelcomeSection;
