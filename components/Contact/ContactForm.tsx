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
    { title: t(`contactPage.formInput1`), name: "name", required: true },
    {
      title: t(`contactPage.formInput2`),
      name: "email",
      type: "email",
      required: true,
    },
    {
      title: t(`contactPage.formInput3`),
      name: "phone",
      type: "number",
      required: true,
    },
    { title: t(`contactPage.formInput4`), name: "age", type: "number" },
    {
      title: t(`contactPage.formInput5`),
      name: "msg",
      required: true,
      multiline: true,
      rows: 3,
    },
  ];

  return (
    <PageSection>
      <PageSectionColumn>
        <Text color={theme.palette.brown.main} variant="subtitle" center>
          {t("contactPage.formTitle")}
        </Text>

        <Row py={5} px={20}>
          {formInput.map(({ title, ...rest }, i) => (
            <Column md={12} py={2} key={i}>
              <TextField variant="filled" label={title} fullWidth {...rest} />
            </Column>
          ))}

          <Column md={12} pt={5}>
            <Button size="large" fullWidth color="info" variant="contained">
              {t("contactPage.formButton")}
            </Button>
          </Column>
        </Row>
      </PageSectionColumn>
    </PageSection>
  );
};

export default ContactForm;
