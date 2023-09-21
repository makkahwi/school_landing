import PageHeader from "@/components/common/PageHeader";
import LevelSection from "@/components/Curriculum/LevelSection";
import useTranslation from "@/hooks/useTranslation";
import { curriculumPage, departmentColors } from "@/utils/constants";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";

export default function StudyLevels() {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <Stack>
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
