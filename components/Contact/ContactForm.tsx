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

  return (
    <PageSection>
      <PageSectionColumn>
        <CardComp bg={theme.palette.blue.dark}>
          <Text color={theme.palette.basic.light} variant="subtitle" center>
            {t("contactPage.formTitle")}
          </Text>

          <Grid container>
            {Array(5)
              .fill(1)
              .map((_, i) => (
                <Grid item md={6} p={1} key={i}>
                  <TextField
                    label={t(`contactPage.formInput${i + 1}`)}
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
