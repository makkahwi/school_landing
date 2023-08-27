import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { curriculumPage } from "@/utils/constants";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

import PageSection from "../../components/common/pageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import ScrollableList from "../../components/common/ScrollableList";

const ActivitiesSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection bg={theme.palette.orange.main}>
      <PageSectionColumn>
        <Typography
          color={theme.palette.basic.light}
          fontWeight="bold"
          fontSize={{ xs: "10vw", md: "5vw" }}
        >
          {t("curriculumPage.activities")}
        </Typography>
      </PageSectionColumn>

      <PageSectionColumn>
        <ScrollableList
          t={t}
          uniqueId="activities-list"
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
          items={curriculumPage.activitiesItems(
            "100%",
            theme.palette.basic.light
          )}
        />
      </PageSectionColumn>
    </PageSection>
  );
};

export default ActivitiesSection;
