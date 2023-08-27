import PageHeader from "@/components/common/PageHeader";
import DiscountSection from "@/components/Engage/DiscountsSection";
import FeesSection from "@/components/Engage/FeesSection";
import JobsSection from "@/components/Engage/JobsSection";
import RequirementsSection from "@/components/Engage/RequirementsSection";
import useTranslation from "@/hooks/useTranslation";
import { departmentColors } from "@/utils/constants";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";

export default function RegistrationAndFees() {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <Stack>
      <PageHeader
        bg={departmentColors.engage}
        title={t("registrationPage.title")}
      />
      <RequirementsSection />
      <FeesSection />
      <DiscountSection />
      <PageHeader
        bg={departmentColors.engage}
        title={t("registrationPage.jobs.title")}
      />
      <JobsSection />
    </Stack>
  );
}
