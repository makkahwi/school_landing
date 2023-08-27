import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

import PageSection from "../../components/common/pageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import Square from "../../components/common/Square";
import {
  AvatarStyles,
  CoCurriculumGrid,
} from "../../components/Curriculum/styles";

const CoCorriculumSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection>
      <PageSectionColumn md={6}>
        <Typography
          mb={5}
          sx={{
            color: theme.palette.blue.dark,
            width: { xs: "100%", md: "80%" },
            fontSize: { xs: "6vw", md: "1.5vw" },
            textAlign: "center",
          }}
        >
          {t("curriculumPage.coText")}
        </Typography>

        <Typography
          sx={{
            color: theme.palette.blue.dark,
            width: { xs: "100%", md: "80%" },
            fontSize: { xs: "6vw", md: "1.5vw" },
            textAlign: "justify",
          }}
        >
          {t("curriculumPage.modernSciencesContent")}
        </Typography>
      </PageSectionColumn>

      <PageSectionColumn md={6}>
        <Box sx={CoCurriculumGrid}>
          {/* <Avatar sx={AvatarStyles} variant="square" /> */}

          <Square
            bgcolor={theme.palette.orange.main}
            radius={{
              mobile: ["6vw", "1.1.1.1"],
              desktop: ["2vw", "1.1.1.1"],
            }}
            sx={{
              gridRow: "1 / 2",
              gridColumn: "1 / 2",
            }}
          />

          <Square
            bgcolor={theme.palette.orange.main}
            radius={{
              mobile: ["6vw", "1.1.1.1"],
              desktop: ["2vw", "1.1.1.1"],
            }}
            sx={{
              gridRow: "2 / 3",
              gridColumn: "1 / 2",
            }}
          />

          <Square
            bgcolor={theme.palette.orange.main}
            radius={{
              mobile: ["6vw", "1.1.1.1"],
              desktop: ["2vw", "1.1.1.1"],
            }}
            sx={{
              gridRow: "1 / 3",
              gridColumn: "2 / 3",
            }}
          />
        </Box>
      </PageSectionColumn>
    </PageSection>
  );
};

export default CoCorriculumSection;
