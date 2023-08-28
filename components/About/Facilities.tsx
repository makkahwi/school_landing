import PageSection from "@/components/common/PageSection";
import PageSectionColumn from "@/components/common/PageSectionColumn";
import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";

import Text from "../common/Text";

const Facilities = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection>
      <PageSectionColumn>
        <Text color={theme.palette.orange.main} variant="title">
          {t("aboutPage.campus.title")}
        </Text>
      </PageSectionColumn>

      {["1", "2"].map((item, i) => (
        <PageSectionColumn key={i}>
          <Text color={theme.palette.orange.main} justify>
            {t(`aboutPage.campus.paragraph${item}`)}
          </Text>
        </PageSectionColumn>
      ))}
    </PageSection>
  );
};

export default Facilities;
