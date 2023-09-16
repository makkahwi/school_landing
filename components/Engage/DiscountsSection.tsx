import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { registrationPage } from "@/utils/constants";
import { Avatar } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../common/PageSection";
import PageSectionColumn from "../common/PageSectionColumn";
import Text from "../common/Text";
import FeeCards from "./FeeCards";

const DiscountsSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection>
      <PageSectionColumn md={6}>
        <Text color={theme.palette.orange.main} variant="title" center>
          {t("registrationPage.discounts.title")}
        </Text>
      </PageSectionColumn>

      <PageSectionColumn md={6}>
        <Avatar
          src="/images/Char-1-Color.png"
          variant="square"
          sx={{
            width: "30%",
            height: "auto",
            margin: "auto auto",
          }}
        />
      </PageSectionColumn>

      <FeeCards
        templateId="discount section"
        isSubStack={true}
        boxes={registrationPage.discountSection}
      />
    </PageSection>
  );
};

export default DiscountsSection;
