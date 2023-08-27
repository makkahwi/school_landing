import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";

import Square from "../common/Square";
import { IslamicStudiesGrid, TitleStyles } from "./styles";

const IslamicSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <Stack
      spacing={4}
      pb={5}
      bgcolor={theme.palette.basic.light}
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100%" }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={8}
        sx={{ width: "100%" }}
      >
        <Stack p={5} spacing={3} sx={{ width: { xs: "100%", md: "50%" } }}>
          <Typography
            sx={{ ...TitleStyles, textAlign: "justify", alignSelf: "start" }}
          >
            {t("curriculumPage.islamicStudies")}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "5vw", md: "1.25vw" },
              textAlign: "justify",
            }}
          >
            {t("curriculumPage.islamicStudiesContent")}
          </Typography>
        </Stack>

        <Box pt={{ md: 7 }} sx={IslamicStudiesGrid}>
          <Square
            bgcolor={theme.palette.blue.dark}
            radius={{
              mobile: ["12vw", "1.1.0.1"],
              desktop: ["5vw", "1.1.0.1"],
            }}
            sx={{
              gridRow: "1 / 9",
              gridColumn: "1 / 9",
            }}
          >
            <Typography
              fontSize={{
                xs: "5vw",
                md: "2vw",
              }}
              fontWeight="bold"
              color="white"
              textAlign="center"
            >
              Quran Memorization & Recitation
            </Typography>
          </Square>

          <Square
            bgcolor={theme.palette.brown.main}
            radius={{
              mobile: ["3vw", "1.1.1.0"],
              desktop: ["1.5vw", "1.1.1.0"],
            }}
            sx={{
              gridRow: "1 / 3",
              gridColumn: "9 / 11",
            }}
          />

          <Square
            bgcolor={theme.palette.orange.main}
            radius={{
              mobile: ["9vw", "1.1.1.0"],
              desktop: ["4vw", "1.1.1.0"],
            }}
            sx={{
              gridRow: "3 / 9",
              gridColumn: "9 / 15",
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
              Islamic Fiqh
            </Typography>
          </Square>

          <Square
            bgcolor={theme.palette.basic.main}
            radius={{
              mobile: ["6vw", "0.1.1.1"],
              desktop: ["2vw", "0.1.1.1"],
            }}
            sx={{
              gridRow: "9 / 13",
              gridColumn: "9 / 13",
            }}
          >
            <Typography
              fontSize={{
                xs: "2.5vw",
                md: "1vw",
              }}
              fontWeight="bold"
              color={theme.palette.brown.main}
              textAlign="center"
            >
              Islamic Culture Education
            </Typography>
          </Square>
        </Box>
      </Stack>

      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ArrowDownwardRoundedIcon
          sx={{
            color: theme.palette.basic.light,
            width: { xs: "20vw", md: "5vw" },
            height: { xs: "20vw", md: "5vw" },
          }}
        />
      </Container>
    </Stack>
  );
};

export default IslamicSection;
