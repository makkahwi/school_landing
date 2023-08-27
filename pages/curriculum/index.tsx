import PageHeader from "@/components/common/PageHeader";
import ActivitiesSection from "@/components/curriculumPage/activitiesSection";
import ClubsSection from "@/components/curriculumPage/clubsSection";
import CoCorriculumSection from "@/components/curriculumPage/coCorriculumSection";
import CoursesSection from "@/components/curriculumPage/coursesSection";
import IslamicSection from "@/components/curriculumPage/islamicSection";
import LanguagesSection from "@/components/curriculumPage/languagesSection";
import LevelsSection from "@/components/curriculumPage/levelsSection";
import LevelTemplate from "@/components/curriculumPage/levelTemplate";
import ModernSection from "@/components/curriculumPage/modernSection";
import useTranslation from "@/hooks/useTranslation";
import { curriculumPage, departmentColors } from "@/utils/constants";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

export default function Curriculum() {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <Stack>
      <PageHeader
        bg={departmentColors.academic}
        title={t("curriculumPage.title")}
      />
      <CoursesSection />
      <LanguagesSection />
      <IslamicSection />
      <ModernSection />
      <CoCorriculumSection />
      <ClubsSection />
      <ActivitiesSection />
      <LevelsSection />

      {curriculumPage.levelsPageSections.map((section, index) => (
        <React.Fragment key={`level section number: ${index}`}>
          <LevelTemplate section={section} />
        </React.Fragment>
      ))}
    </Stack>
  );
}
