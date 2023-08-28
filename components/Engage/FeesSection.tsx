import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { registrationPage } from "@/utils/constants";
import { Avatar } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import Text from "../common/Text";
import FeeCards from "./FeeCards";

const FeesSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection bg="">
      <PageSectionColumn md={6}>
        <Text color={theme.palette.orange.main} variant="title">
          {t("registrationPage.structure.title")}
        </Text>
      </PageSectionColumn>

      <PageSectionColumn md={6}>
        <Avatar
          src="global\quds-icon.png"
          variant="square"
          sx={{
            width: "30%",
            height: "auto",
          }}
        />
      </PageSectionColumn>

      <PageSectionColumn>
        <FeeCards
          templateId="structure section"
          isSubStack={false}
          boxes={registrationPage.structureSection}
          bg=""
          cardBg={theme.palette.basic.light}
        />
      </PageSectionColumn>
    </PageSection>
  );
};

export default FeesSection;
