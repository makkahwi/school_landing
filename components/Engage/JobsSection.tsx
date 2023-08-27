import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { registrationPage } from "@/utils/constants";
import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import Square from "../../components/common/Square";

const JobsSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const jobOpBox = (title: string, item: string[]) => {
    return (
      <Stack width="100%">
        <Typography
          textAlign="left"
          width="100%"
          color={theme.palette.blue.dark}
          fontSize={{
            xs: "3vw",
            md: "2.5vw",
          }}
        >
          {t(title)}
        </Typography>

        {item.map((bullet, bulletIndex) => (
          <React.Fragment
            key={`jobs section ${title} bullet number: ${bulletIndex}`}
          >
            <Typography
              textAlign="left"
              width="100%"
              fontSize={{
                xs: "1vw",
                md: "1vw",
              }}
            >
              {t(bullet)}
            </Typography>
          </React.Fragment>
        ))}
      </Stack>
    );
  };

  return (
    <PageSection bg={theme.palette.basic.light}>
      <PageSectionColumn md={6}>
        <Typography
          p={3}
          width="100%"
          textAlign="center"
          fontSize={{ xs: "3vw", md: "2.5vw" }}
          fontWeight="bold"
          color={theme.palette.basic.dark}
        >
          {t("registrationPage.jobs.Academic")}
        </Typography>

        <PageSection>
          {registrationPage.jobsSection.map((item, i) => (
            <PageSectionColumn key={i}>
              <Square
                bgcolor={theme.palette.basic.main}
                radius={{
                  mobile: ["6vw", "1.1.1.1"],
                  desktop: ["2vw", "1.1.1.1"],
                }}
                sx={{
                  width: "60%",
                  padding: 3,
                }}
              >
                <Stack spacing={1} width="100%" alignItems="center">
                  <Typography
                    textAlign="left"
                    width="100%"
                    color={theme.palette.blue.dark}
                    fontSize={{
                      xs: "3vw",
                      md: "4vw",
                    }}
                  >
                    {t(item.title)}
                  </Typography>

                  {jobOpBox(
                    "registrationPage.jobs.jobDescription",
                    item.jobDescription
                  )}

                  {jobOpBox(
                    "registrationPage.jobs.qualifications",
                    item.qualifications
                  )}

                  {jobOpBox("registrationPage.jobs.documents", item.documents)}

                  <Typography
                    pt={5}
                    fontWeight="bold"
                    fontSize={{
                      xs: "2vw",
                      md: "1.5vw",
                    }}
                  >
                    {t("registrationPage.jobs.emailText")}
                  </Typography>

                  <Typography
                    fontWeight="bold"
                    fontSize={{
                      xs: "2vw",
                      md: "1.5vw",
                    }}
                  >
                    {t("registrationPage.jobs.email")}
                  </Typography>

                  <Button
                    sx={{
                      fontWeight: "bold",
                      fontSize: {
                        xs: "2vw",
                        md: "1.5vw",
                      },
                      bgcolor: theme.palette.blue.dark,
                      color: theme.palette.basic.light,
                      padding: 2,
                      borderRadius: "1vw",
                      width: "40%",

                      "&:hover": {
                        color: theme.palette.blue.dark,
                        bgcolor: theme.palette.basic.light,
                      },
                    }}
                  >
                    {t("registrationPage.jobs.apply")}
                  </Button>
                </Stack>
              </Square>
            </PageSectionColumn>
          ))}
        </PageSection>
      </PageSectionColumn>

      <PageSectionColumn md={6}>
        <Typography
          p={3}
          width="100%"
          textAlign="center"
          fontSize={{ xs: "3vw", md: "2.5vw" }}
          fontWeight="bold"
          color={theme.palette.basic.dark}
        >
          {t("registrationPage.jobs.NonAcademic")}
        </Typography>

        <PageSection>
          {registrationPage.jobsSection.map((item, i) => (
            <PageSectionColumn key={i}>
              <Square
                bgcolor={theme.palette.basic.main}
                radius={{
                  mobile: ["6vw", "1.1.1.1"],
                  desktop: ["2vw", "1.1.1.1"],
                }}
                sx={{
                  width: "60%",
                  padding: 3,
                }}
              >
                <Stack spacing={1} width="100%" alignItems="center">
                  <Typography
                    textAlign="left"
                    width="100%"
                    color={theme.palette.blue.dark}
                    fontSize={{
                      xs: "3vw",
                      md: "4vw",
                    }}
                  >
                    {t(item.title)}
                  </Typography>

                  {jobOpBox(
                    "registrationPage.jobs.jobDescription",
                    item.jobDescription
                  )}

                  {jobOpBox(
                    "registrationPage.jobs.qualifications",
                    item.qualifications
                  )}

                  {jobOpBox("registrationPage.jobs.documents", item.documents)}

                  <Typography
                    pt={5}
                    fontWeight="bold"
                    fontSize={{
                      xs: "2vw",
                      md: "1.5vw",
                    }}
                  >
                    {t("registrationPage.jobs.emailText")}
                  </Typography>

                  <Typography
                    fontWeight="bold"
                    fontSize={{
                      xs: "2vw",
                      md: "1.5vw",
                    }}
                  >
                    {t("registrationPage.jobs.email")}
                  </Typography>

                  <Button
                    sx={{
                      fontWeight: "bold",
                      fontSize: {
                        xs: "2vw",
                        md: "1.5vw",
                      },
                      bgcolor: theme.palette.blue.dark,
                      color: theme.palette.basic.light,
                      padding: 2,
                      borderRadius: "1vw",
                      width: "40%",

                      "&:hover": {
                        color: theme.palette.blue.dark,
                        bgcolor: theme.palette.basic.light,
                      },
                    }}
                  >
                    {t("registrationPage.jobs.apply")}
                  </Button>
                </Stack>
              </Square>
            </PageSectionColumn>
          ))}
        </PageSection>
      </PageSectionColumn>
    </PageSection>
  );
};

export default JobsSection;
