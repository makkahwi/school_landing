import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import {
  defaultFees,
} from "@/utils/adminContent";
import { fetchFirebaseContent } from "@/utils/firebaseContent";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import Text from "../common/Text";
import FeeCards from "./FeeCards";

const FeesSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);
  const fallbackFees = useMemo(() => defaultFees(t), [t]);
  const [structureSection, setStructureSection] = useState(fallbackFees);

  useEffect(() => {
    const sync = () => {
      fetchFirebaseContent()
        .then((stored) =>
          setStructureSection(stored.fees?.length ? stored.fees : fallbackFees),
        )
        .catch(() => setStructureSection(fallbackFees));
    };

    sync();
    window.addEventListener("ais-admin-content-updated", sync);
    return () => {
      window.removeEventListener("ais-admin-content-updated", sync);
    };
  }, [fallbackFees]);

  return (
    <PageSection bg="" sx={{ py: { xs: 7, md: 9 } }}>
      <PageSectionColumn md={4} align="start" justify="start">
        <Text color={theme.palette.orange.main} variant="title" style={{ marginBottom: 8 }}>
          {t("Engage.Fees.Title")}
        </Text>
        <Typography sx={{ color: "text.secondary", lineHeight: 1.8, maxWidth: 420 }}>
          {t("Engage.Registration.Title")}
        </Typography>
      </PageSectionColumn>

      <PageSectionColumn md={8} p={{ xs: 2, md: 3 }}>
        <FeeCards
          templateId="structure section"
          isSubStack={false}
          boxes={structureSection}
          bg=""
          cardBg={theme.palette.basic.light}
          currency
        />
      </PageSectionColumn>
    </PageSection>
  );
};

export default FeesSection;
