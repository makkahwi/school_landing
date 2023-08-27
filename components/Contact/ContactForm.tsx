import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

import CardComp from "../common/Card";
import PageSection from "../common/PageSection";
import PageSectionColumn from "../common/PageSectionColumn";
import Text from "../common/Text";

const ContactForm = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection>
      <PageSectionColumn>
        <CardComp bg={theme.palette.blue.dark}>
          <Text color={theme.palette.basic.light} variant="subtitle" center>
            {t("contactPage.formTitle")}
          </Text>

          {Array(5)
            .fill(1)
            .map((_, i) => i + 1)
            .map((_, i) => (
              <React.Fragment key={`text field item number: ${i}`}>
                <TextField
                  label={t(`contactPage.formInput${i}`)}
                  variant="outlined"
                />
              </React.Fragment>
            ))}

          <Button size="large" variant="contained">
            {t("contactPage.formButton")}
          </Button>
        </CardComp>
      </PageSectionColumn>
    </PageSection>
  );
};

export default ContactForm;
