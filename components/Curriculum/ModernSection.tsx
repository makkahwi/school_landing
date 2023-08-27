import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import Square from "../../components/common/Square";
import { ModernScienceGrid } from "../../components/Curriculum/styles";
import Text from "../common/Text";

const ModernSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection bg={theme.palette.orange.main}>
      <PageSectionColumn md={6}>
        <Text color={theme.palette.basic.light} variant="title">
          {t("curriculumPage.modernSciences")}
        </Text>
      </PageSectionColumn>

      <PageSectionColumn md={6}>
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
      </PageSectionColumn>

      <PageSectionColumn>
        <Text color={theme.palette.basic.light} justify>
          {t("curriculumPage.modernSciencesContent")}
        </Text>
      </PageSectionColumn>
    </PageSection>
  );
};

export default ModernSection;
