import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../../components/common/pageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import Square from "../../components/common/Square";
import {
  IslamicStudiesGrid,
  TitleStyles,
} from "../../components/Curriculum/styles";

const IslamicSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection>
      <PageSectionColumn md={6}>
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
      </PageSectionColumn>

      <PageSectionColumn md={6}>
        <Box sx={IslamicStudiesGrid}>
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
      </PageSectionColumn>
    </PageSection>
  );
};

export default IslamicSection;
