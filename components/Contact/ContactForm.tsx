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
    { title: t(`contactPage.formInput1`), name: "name" },
    { title: t(`contactPage.formInput2`), name: "email" },
    { title: t(`contactPage.formInput3`), name: "phone" },
    { title: t(`contactPage.formInput4`), name: "age" },
    { title: t(`contactPage.formInput5`), name: "msg", fullWidth: true },
  ];

  return (
    <PageSection>
      <PageSectionColumn>
        <CardComp bg={theme.palette.brown.main}>
          <Text color={theme.palette.basic.light} variant="subtitle" center>
            {t("contactPage.formTitle")}
          </Text>

          <Grid container justifyContent="center" py={5} px={20}>
            {formInput.map(({ title, fullWidth }, i) => (
              <Grid item md={fullWidth ? 12 : 6} p={1} key={i}>
                <Text color={theme.palette.basic.light} bold>
                  {title}
                </Text>

                <TextField
                  variant="outlined"
                  fullWidth
                  style={{ margin: "10px auto", backgroundColor: "white" }}
                />
              </Grid>
            ))}

            <Grid item md={12} pt={5}>
              <Button size="large" fullWidth>
                {t("contactPage.formButton")}
              </Button>
            </Grid>
          </Grid>
        </CardComp>
      </PageSectionColumn>
    </PageSection>
  );
};

export default ContactForm;
