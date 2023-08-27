import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { curriculumPage } from "@/utils/constants";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../../components/common/pageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import ScrollableList from "../../components/common/ScrollableList";

const ClubsSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection bg={theme.palette.blue.dark}>
      <PageSectionColumn>
        <Typography
          color={theme.palette.basic.light}
          fontWeight="bold"
          fontSize={{ xs: "10vw", md: "5vw" }}
        >
          {t("curriculumPage.clubs")}
        </Typography>
      </PageSectionColumn>

      <PageSectionColumn>
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
      </PageSectionColumn>
    </PageSection>
  );
};

export default ClubsSection;
