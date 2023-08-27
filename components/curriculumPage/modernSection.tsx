import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

import Square from "../shared/Square";
import { ModernScienceContainer, ModernScienceGrid, TitleStyles } from "./styles";

const ModernSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <Stack p={5} pt={10} spacing={5} sx={ModernScienceContainer}>
      <Typography
        mb={5}
        sx={{
          ...TitleStyles,
          color: theme.palette.basic.light,
        }}
      >
        {t("curriculumPage.modernSciences")}
      </Typography>

      <Typography
        mb={5}
        sx={{
          color: theme.palette.basic.light,
          width: { xs: "100%", md: "80%" },
          fontSize: { xs: "6vw", md: "1.5vw" },
          textAlign: "justify",
        }}
      >
        {t("curriculumPage.modernSciencesContent")}
      </Typography>

      <Box sx={ModernScienceGrid}>
        <Square
          bgcolor={theme.palette.brown.main}
          radius={{
            mobile: ["2vw", "1.1.0.1"],
            desktop: ["1.5vw", "1.1.0.1"],
          }}
          sx={{
            gridRow: "1 / 5",
            gridColumn: "1 / 5",
          }}
        >
          <Typography
            fontSize={{
              xs: "2vw",
              md: "1vw",
            }}
            fontWeight="bold"
            color={theme.palette.basic.light}
            textAlign="center"
          >
            Math
          </Typography>
        </Square>

        <Square
          bgcolor={theme.palette.blue.dark}
          radius={{
            mobile: ["5vw", "1.0.1.1"],
            desktop: ["3vw", "1.0.1.1"],
          }}
          sx={{
            gridRow: "1 / 7",
            gridColumn: "5 / 11",
          }}
        >
          <Typography
            fontSize={{
              xs: "4.5vw",
              md: "1.75vw",
            }}
            fontWeight="bold"
            color={theme.palette.basic.light}
            textAlign="center"
          >
            Science
          </Typography>
        </Square>

        <Square
          bgcolor={theme.palette.basic.light}
          radius={{
            mobile: ["7vw", "0.1.1.1"],
            desktop: ["4vw", "0.1.1.1"],
          }}
          sx={{
            gridRow: "1 / 11",
            gridColumn: "11 / 21",
          }}
        >
          <Typography
            fontSize={{
              xs: "5vw",
              md: "2vw",
            }}
            fontWeight="bold"
            color={theme.palette.brown.main}
            textAlign="center"
          >
            Computer Science
          </Typography>
        </Square>

        <Square
          bgcolor={theme.palette.blue.dark}
          radius={{
            mobile: ["2vw", "1.1.1.0"],
            desktop: ["1.5vw", "1.1.1.0"],
          }}
          sx={{
            gridRow: "1 / 4",
            gridColumn: "21 / 24",
          }}
        >
          <Typography
            fontSize={{
              xs: "2vw",
              md: "1vw",
            }}
            fontWeight="bold"
            color={theme.palette.basic.light}
            textAlign="center"
          >
            Sports
          </Typography>
        </Square>

        <Square
          bgcolor={theme.palette.brown.main}
          radius={{
            mobile: ["1vw", "0.1.1.1"],
            desktop: ["1vw", "0.1.1.1"],
          }}
          sx={{
            gridRow: "4 / 7",
            gridColumn: "21 / 24",
          }}
        >
          <Typography
            fontSize={{
              xs: "2vw",
              md: "1vw",
            }}
            fontWeight="bold"
            color={theme.palette.basic.light}
            textAlign="center"
          >
            Arts
          </Typography>
        </Square>
      </Box>
    </Stack>
  );
};

export default ModernSection;
