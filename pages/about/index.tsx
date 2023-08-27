import AISBeginning from "@/pages/about/AISBeginning";
import AdvantagesSection from "@/pages/about/AdvantagesSection";
import PageHeader from "@/components/common/PageHeader";
import useTranslation from "@/hooks/useTranslation";
import { departmentColors } from "@/utils/constants";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import Facilities from "./Facilities";
import VisionMissionObjectives from "./VisionMissionObjectives";

export default function AboutAIS() {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <Stack>
      <PageHeader bg={departmentColors.about} title={t("aboutPage.title")} />
      <AdvantagesSection />
      <AISBeginning />
      <VisionMissionObjectives />
      <Facilities />
    </Stack>
  );
}
