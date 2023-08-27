import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Square from "../common/Square";
import { UpperSquaresGrid, UpperSquaresStyles } from "./styles";

const WelcomeSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <Stack
      id="top-container"
      p={7}
      bgcolor={theme.palette.blue.dark}
      sx={{ width: "100%" }}
    >
      <Box sx={UpperSquaresStyles}>
        <Box sx={UpperSquaresGrid}>
          <Square
            bgcolor={theme.palette.blue.light}
            radius={{
              mobile: ["3vw", "1.1.0.1"],
              desktop: ["1vw", "1.1.0.1"],
            }}
            sx={{
              gridRow: "2 / 3",
              gridColumn: "1 / 3",
            }}
          />

          <Square
            bgcolor={theme.palette.blue.light}
            radius={{
              mobile: ["4vw", "1.1.1.0"],
              desktop: ["1.5vw", "1.1.1.0"],
            }}
            sx={{
              gridRow: "1 / 4",
              gridColumn: "3 / 6",
            }}
          />

          <Square
            bgcolor={theme.palette.blue.light}
            radius={{
              mobile: ["4vw", "0.1.1.1"],
              desktop: ["1.5vw", "0.1.1.1"],
            }}
            sx={{
              gridRow: "4 / 5",
              gridColumn: "3 / 5  ",
            }}
          />
        </Box>
      </Box>

      <Typography
        mt={3}
        mb={3}
        fontSize={{ xs: "5vw", md: "2.5vw" }}
        color={theme.palette.basic.light}
        fontWeight="bold"
      >
        {t("curriculumPage.title")}
      </Typography>
    </Stack>
  );
};

export default WelcomeSection;
