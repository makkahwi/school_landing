import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { registrationPage } from "@/utils/constants";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import CardComp from "../common/Card";
import Text from "../common/Text";

const JobsSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const JobDetails = ({ title, items }) => (
    <Stack width="100%">
      <Text color={theme.palette.blue.dark} variant="cardTitle">
        {t(title)}
      </Text>

      <Text>
        {items.map((bullet, i) => (
          <span key={i} style={{ lineHeight: 2 }}>
            {t(bullet)}
            <br />
          </span>
        ))}
      </Text>
    </Stack>
  );
  const JobSection = ({ item }) => (
    <CardComp>
      <Text color={theme.palette.blue.dark} variant="subtitle">
        {t(item.title)}
      </Text>

      <JobDetails
        title="registrationPage.jobs.jobDescription"
        items={item.jobDescription}
      />

      <JobDetails
        title="registrationPage.jobs.qualifications"
        items={item.qualifications}
      />

      <JobDetails
        title="registrationPage.jobs.documents"
        items={item.documents}
      />

      <Button
        size="large"
        sx={{
          fontWeight: "bold",
          width: "50%",
          bgcolor: theme.palette.blue.dark,
          color: theme.palette.basic.light,
          borderRadius: "1vw",
          "&:hover": {
            color: theme.palette.blue.dark,
            bgcolor: theme.palette.basic.light,
          },
        }}
      >
        {t("registrationPage.jobs.apply")}
      </Button>
    </CardComp>
  );

  return (
    <PageSection bg="">
      {registrationPage.jobsSection.map((item, i) => (
        <PageSectionColumn md={6} key={i}>
          <JobSection item={item} />
        </PageSectionColumn>
      ))}
    </PageSection>
  );
};

export default JobsSection;
