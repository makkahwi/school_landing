import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { Stack, Typography, Box } from "@mui/material";
import theme from "@/styles/theme";
import Square from "../common/Square";
import React from "react";
import Avatar from "@mui/material/Avatar";
import {
  UpperSquaresStyles,
  UpperSquaresGrid,
  LowerSquaresStyles,
  LowerSquaresGrid,
} from "./styles";

const WelcomeSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <Stack
      id="top-container"
      p={3}
      pt={{ xs: 15, md: 3 }}
      pb={5}
      bgcolor={theme.palette.basic.main}
      sx={{ width: "100%" }}
    >
      <Box sx={UpperSquaresStyles}>
        <Box sx={UpperSquaresGrid}>
          <Square
            bgcolor={theme.palette.blue.dark}
            radius={{
              mobile: ["3vw", "1.0.1.1"],
              desktop: ["1vw", "1.0.1.1"],
            }}
            sx={{
              gridRow: "1 / 3",
              gridColumn: "1 / 3",
            }}
          />

          <Square
            bgcolor={theme.palette.blue.dark}
            radius={{
              mobile: ["4vw", "0.1.1.1"],
              desktop: ["1.5vw", "0.1.1.1"],
            }}
            sx={{
              gridRow: "1 / 4",
              gridColumn: "3 / 6",
            }}
          />
        </Box>
      </Box>

      <Typography
        mt={3}
        mb={3}
        fontSize={{ xs: "8vw", md: "4vw" }}
        color={theme.palette.blue.dark}
        fontWeight="bold"
      >
        {t("aboutPage.title")}
      </Typography>

      <Stack
        spacing={5}
        direction={{ xs: "column-reverse", md: "row" }}
        sx={LowerSquaresStyles}
      >
        <Box sx={LowerSquaresGrid}>
          <Square
            bgcolor={theme.palette.blue.dark}
            radius={{
              mobile: ["3vw", "1.1.1.0"],
              desktop: ["1vw", "1.1.1.0"],
            }}
            sx={{
              gridRow: "1 / 3",
              gridColumn: "1 / 3",
            }}
          />

          <Square
            bgcolor={theme.palette.blue.dark}
            radius={{
              mobile: ["4vw", "0.1.1.1"],
              desktop: ["1.5vw", "0.1.1.1"],
            }}
            sx={{
              gridRow: "3 / 6",
              gridColumn: "1 / 4",
            }}
          />
        </Box>

        <Avatar
          src=""
          alt="children"
          variant="square"
          sx={{
            width: { xs: "100%", md: "50%" },
            height: { xs: "auto", md: "20rem" },
          }}
        />
      </Stack>
    </Stack>
  );
};

export default WelcomeSection;
