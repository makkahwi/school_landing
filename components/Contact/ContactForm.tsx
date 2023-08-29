import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

import CardComp from "../common/Card";
import PageSection from "../common/PageSection";
import PageSectionColumn from "../common/PageSectionColumn";
import Text from "../common/Text";

const ContactForm = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const formInput = [
    t(`contactPage.formInput1`),
    t(`contactPage.formInput2`),
    t(`contactPage.formInput3`),
    t(`contactPage.formInput4`),
    t(`contactPage.formInput5`),
  ];

  return (
    <PageSection>
      <PageSectionColumn>
        <CardComp bg={theme.palette.blue.dark}>
          <Text color={theme.palette.basic.light} variant="subtitle" center>
            {t("contactPage.formTitle")}
          </Text>

          <Grid container>
            {formInput.map((text, i) => (
              <Grid item md={6} p={1} key={i}>
                <TextField
                  label={text}
                  variant="outlined"
                  fullWidth
                  style={{ margin: "10px auto", backgroundColor: "white" }}
                />
              </Grid>
            ))}
          </Grid>

          <Button size="large" variant="contained">
            {t("contactPage.formButton")}
          </Button>
        </CardComp>
      </PageSectionColumn>
    </PageSection>
  );
};

export default ContactForm;
