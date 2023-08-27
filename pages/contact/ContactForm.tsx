import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import CardComp from "../../components/common/Card";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import PageSection from "../../components/common/pageSection";

const ContactForm = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection>
      <PageSectionColumn>
        <CardComp bg={theme.palette.blue.dark}>
          <Typography
            m={3}
            fontSize={{ xs: "5vw", md: "3vw" }}
            fontWeight="bold"
            color={theme.palette.basic.light}
          >
            {t("contactPage.formTitle")}
          </Typography>

          {Array(5)
            .fill(1)
            .map((_, i) => i + 1)
            .map((i) => (
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
