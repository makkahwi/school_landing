import PageSection from "../common/pageSection";
import PageSectionColumn from "../common/PageSectionColumn";
import FeeCards from "./FeeCards";
import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { registrationPage } from "@/utils/constants";
import { Avatar, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const DiscountsSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection>
      <PageSectionColumn md={6}>
        <Typography
          p={3}
          width="100%"
          textAlign="center"
          fontSize={{ xs: "5vw", md: "4vw" }}
          fontWeight="bold"
          color={theme.palette.orange.main}
        >
          {t("registrationPage.discounts.title")}
        </Typography>
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

      <FeeCards
        templateId="discount section"
        isSubStack={true}
        boxes={registrationPage.discountSection}
        bg={theme.palette.basic.light}
        cardBg={theme.palette.basic.main}
      />
    </PageSection>
  );
};

export default DiscountsSection;
