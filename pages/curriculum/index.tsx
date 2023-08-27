import PageHeader from "@/components/common/PageHeader";
import useTranslation from "@/hooks/useTranslation";
import ActivitiesSection from "@/pages/curriculum/ActivitiesSection";
import ClubsSection from "@/pages/curriculum/ClubsSection";
import CoCorriculumSection from "@/pages/curriculum/CoCuSection";
import CoursesSection from "@/pages/curriculum/CoursesSection";
import IslamicSection from "@/pages/curriculum/IslamicSection";
import LanguagesSection from "@/pages/curriculum/LanguagesSection";
import LevelTemplate from "@/pages/curriculum/LevelSection";
import ModernSection from "@/pages/curriculum/ModernSection";
import { curriculumPage, departmentColors } from "@/utils/constants";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";

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
        <LevelTemplate section={section} key={i} />
      ))}
    </Stack>
  );
}
