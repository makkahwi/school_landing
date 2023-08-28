import AdvantagesSection from "@/components/About/AdvantagesSection";
import AISBeginning from "@/components/About/AISBeginning";
import Facilities from "@/components/About/Facilities";
import VisionMissionObjectives from "@/components/About/VisionMissionObjectives";
import PageHeader from "@/components/common/PageHeader";
import useTranslation from "@/hooks/useTranslation";
import { departmentColors } from "@/utils/constants";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";

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
