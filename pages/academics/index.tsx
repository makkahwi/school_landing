import PageHeader from "@/components/common/PageHeader";
import ActivitiesSection from "@/components/Curriculum/ActivitiesSection";
import ClubsSection from "@/components/Curriculum/ClubsSection";
import CoCorriculumSection from "@/components/Curriculum/CoCuSection";
import CoursesSection from "@/components/Curriculum/CoursesSection";
import IslamicSection from "@/components/Curriculum/IslamicSection";
import LanguagesSection from "@/components/Curriculum/LanguagesSection";
import LevelSection from "@/components/Curriculum/LevelSection";
import ModernSection from "@/components/Curriculum/ModernSection";
import useTranslation from "@/hooks/useTranslation";
import { curriculumPage, departmentColors } from "@/utils/constants";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";

export default function Academics() {
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

      <PageHeader
        bg={departmentColors.academic}
        title={t("curriculumPage.coCURRICULUM")}
      />
      <CoCorriculumSection />
      <ClubsSection />
      <ActivitiesSection />

      <PageHeader
        bg={departmentColors.academic}
        title={t("curriculumPage.levels.title")}
      />

      {curriculumPage.levelsPageSections.map((section, i) => (
        <LevelSection section={section} key={i} />
      ))}
    </Stack>
  );
}
