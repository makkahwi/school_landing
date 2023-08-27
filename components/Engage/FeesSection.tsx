import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { registrationPage } from "@/utils/constants";
import { Avatar, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import FeeCards from "./FeeCards";

const FeesSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection bg="">
      <PageSectionColumn md={6}>
        <Typography
          p={3}
          width="100%"
          textAlign="center"
          fontSize={{ xs: "5vw", md: "4vw" }}
          fontWeight="bold"
          color={theme.palette.orange.main}
        >
          {t("registrationPage.structure.title")}
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
