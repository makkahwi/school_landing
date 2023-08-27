import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { Stack, Typography, Box } from "@mui/material";
import theme from "@/styles/theme";
import React from "react";
import { curriculumPage } from "@/utils/constants";
import ScrollableList from "../common/ScrollableList";

const ClubsSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <Stack sx={{ width: "100%" }} bgcolor={theme.palette.blue.dark}>
      <Box m={5}>
        <Typography
          color={theme.palette.basic.light}
          fontWeight="bold"
          fontSize={{ xs: "10vw", md: "5vw" }}
        >
          {t("curriculumPage.clubs")}
        </Typography>
      </Box>

      <Box
        p={3}
        mb={5}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ScrollableList
          t={t}
          uniqueId="clubs-list"
          textColor={theme.palette.basic.light}
          arrowColor={theme.palette.basic.light}
          desktop={{
            width: 0.62,
            height: "15vw",
            arrowSize: "8vw",
            iconSize: 6,
            marginSize: 3,
          }}
          mobile={{
            width: 0.9,
            height: "35vw",
            arrowSize: "18vw",
            iconSize: 13,
            marginSize: 9,
          }}
          items={curriculumPage.clubsItems("100%", theme.palette.basic.light)}
        />
      </Box>
    </Stack>
  );
};

export default ClubsSection;
