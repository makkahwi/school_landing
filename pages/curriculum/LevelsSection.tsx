import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

import PageSection from "../../components/common/pageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import Square from "../../components/common/Square";
import { AvatarStyles, WelcomeGrid } from "../../components/CurriculumPage/styles";

const LevelsSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection>
      <PageSectionColumn md={6}>
        <Typography
          color={theme.palette.orange.main}
          fontWeight="bold"
          textAlign="center"
          fontSize={{ xs: "10vw", md: "4vw" }}
          sx={{
            width: "80%",
          }}
        >
          {t("curriculumPage.levels.title")}
        </Typography>
      </PageSectionColumn>

      <PageSectionColumn md={6}>
        <Box sx={WelcomeGrid}>
          <Square
            bgcolor={theme.palette.blue.dark}
            radius={{
              mobile: ["6vw", "1.1.1.1"],
              desktop: ["2vw", "1.1.1.1"],
            }}
            sx={{
              gridRow: "3 / 8",
              gridColumn: "1 / 6",
            }}
          />

          <Square
            bgcolor={theme.palette.orange.main}
            radius={{
              mobile: ["6vw", "1.1.1.1"],
              desktop: ["2vw", "1.1.1.1"],
            }}
            sx={{
              gridRow: "1 / 8",
              gridColumn: "6 / 13",
            }}
          />

          <Square
            bgcolor={theme.palette.basic.main}
            radius={{
              mobile: ["4vw", "1.1.1.1"],
              desktop: ["2vw", "1.1.1.1"],
            }}
            sx={{
              gridRow: "8 / 13",
              gridColumn: "2 / 7",
            }}
          />

          <Square
            bgcolor={theme.palette.brown.main}
            radius={{
              mobile: ["4vw", "1.1.1.1"],
              desktop: ["2vw", "1.1.1.1"],
            }}
            sx={{
              gridRow: "8 / 13",
              gridColumn: "7 / 12",
            }}
          />

          <Avatar sx={AvatarStyles} variant="square" />
        </Box>
      </PageSectionColumn>
    </PageSection>
  );
};

export default LevelsSection;
