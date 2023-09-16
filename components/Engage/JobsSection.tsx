import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Button, Stack } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import CardComp from "../common/Card";
import Text from "../common/Text";
import Link from "next/link";

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
            {bullet}
            <br />
          </span>
        ))}
      </Text>
    </Stack>
  );

  const JobSection = ({ item }) => (
    <CardComp>
      <Text color={theme.palette.blue.dark} variant="subtitle">
        {item.title}
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

      <Link target="_blank" href="mailto:Principal@aqsa.edu.my">
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
      </Link>
    </CardComp>
  );

  const jobsSection = [
    // {
    //   title: t("registrationPage.jobs.item1.title"),
    //   jobDescription: [
    //     t("registrationPage.jobs.item1.jobDescription.item1"),
    //     t("registrationPage.jobs.item1.jobDescription.item2"),
    //   ],
    //   qualifications: [
    //     t("registrationPage.jobs.item1.qualifications.item1"),
    //     t("registrationPage.jobs.item1.qualifications.item2"),
    //     t("registrationPage.jobs.item1.qualifications.item3"),
    //     t("registrationPage.jobs.item1.qualifications.item4"),
    //     t("registrationPage.jobs.item1.qualifications.item5"),
    //     t("registrationPage.jobs.item1.qualifications.item6"),
    //     t("registrationPage.jobs.item1.qualifications.item7"),
    //     t("registrationPage.jobs.item1.qualifications.item8"),
    //   ],
    //   documents: [
    //     t("registrationPage.jobs.item1.documents.item1"),
    //     t("registrationPage.jobs.item1.documents.item2"),
    //     t("registrationPage.jobs.item1.documents.item3"),
    //     t("registrationPage.jobs.item1.documents.item4"),
    //     t("registrationPage.jobs.item1.documents.item5"),
    //   ],
    // },
  ];

  return (
    <PageSection bg="">
      {jobsSection.length ? (
        jobsSection.map((item, i) => (
          <PageSectionColumn md={6} key={i}>
            <JobSection item={item} />
          </PageSectionColumn>
        ))
      ) : (
        <PageSectionColumn md={12}>
          <Text center variant="cardtitle">
            {t("registrationPage.NoJobs")}
          </Text>

          <Text center variant="subtitle">
            {t("registrationPage.Email")}
          </Text>
        </PageSectionColumn>
      )}
    </PageSection>
  );
};

export default JobsSection;
