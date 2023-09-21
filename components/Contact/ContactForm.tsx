import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

import CardComp from "../common/Card";
import Column from "../common/Column";
import PageSection from "../common/PageSection";
import PageSectionColumn from "../common/PageSectionColumn";
import Row from "../common/Row";
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
        <CardComp bg={theme.palette.basic.main}>
          <Text color={theme.palette.brown.main} variant="subtitle" center>
            {t("contactPage.formTitle")}
          </Text>

          <Row py={5} px={20}>
            {formInput.map(({ title, fullWidth }, i) => (
              <Column md={fullWidth ? 12 : 6} p={1} key={i}>
                <Text color={theme.palette.brown.main} bold>
                  {title}
                </Text>

                <TextField
                  variant="outlined"
                  fullWidth
                  style={{ margin: "10px auto", backgroundColor: "white" }}
                />
              </Column>
            ))}

            <Column md={12} pt={5}>
              <Button size="large" fullWidth color="info" variant="contained">
                {t("contactPage.formButton")}
              </Button>
            </Column>
          </Row>
        </CardComp>
      </PageSectionColumn>
    </PageSection>
  );
};

export default ContactForm;
