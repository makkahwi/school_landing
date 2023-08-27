import PageHeader from "@/components/common/PageHeader";
import JobOpportunitiesSection from "@/pages/engage/JobsSection";
import useTranslation from "@/hooks/useTranslation";
import DiscountSection from "@/pages/engage/DiscountsSection";
import FeesSection from "@/pages/engage/FeesSection";
import RequirementsSection from "@/pages/engage/RequirementsSection";
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
      <JobOpportunitiesSection />
    </Stack>
  );
}
