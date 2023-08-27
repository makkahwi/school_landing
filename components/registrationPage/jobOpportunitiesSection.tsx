import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { Button, Stack, Typography, Box, Avatar } from "@mui/material";
import theme from "@/styles/theme";
import Square from "../common/Square";
import { registrationPage } from "@/utils/constants";
import React from "react";
import { JobsGrid } from "./styles";

const JobOpportunitiesSection = () => {
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
    <Stack
      bgcolor={theme.palette.basic.light}
      p={3}
      pt={10}
      pb={10}
      width="100%"
    >
      <Stack
        alignItems="center"
        width="100%"
        direction={{ xs: "column", md: "row" }}
      >
        <Typography
          p={3}
          width="100%"
          textAlign="center"
          fontSize={{ xs: "5vw", md: "4vw" }}
          fontWeight="bold"
          color={theme.palette.blue.dark}
        >
          {t("registrationPage.jobs.title")}
        </Typography>

        <Box sx={JobsGrid}>
          <Square
            bgcolor={theme.palette.orange.main}
            radius={{
              mobile: ["6vw", "1.1.0.1"],
              desktop: ["2vw", "1.1.0.1"],
            }}
            sx={{
              gridRow: "1 / 13",
              gridColumn: "1 / 13",
              position: "relative",
            }}
          >
            <Avatar
              sx={{
                width: "80%",
                height: "100%",
                position: "absolute",
                bottom: "0px",
              }}
              variant="square"
            />
          </Square>

          <Square
            bgcolor={theme.palette.blue.dark}
            radius={{
              mobile: ["6vw", "1.1.1.0"],
              desktop: ["2vw", "1.1.1.0"],
            }}
            sx={{
              gridRow: "5 / 13",
              gridColumn: "13 / 21",
              position: "relative",
            }}
          >
            <Avatar
              sx={{
                height: "80%",
                width: "auto",
                position: "absolute",
              }}
              variant="square"
              src="global\logo2.png"
              alt="logo 2"
            />
          </Square>

          <Square
            bgcolor={theme.palette.brown.main}
            radius={{
              mobile: ["4vw", "1.0.1.1"],
              desktop: ["2vw", "1.0.1.1"],
            }}
            sx={{
              gridRow: "13 / 18",
              gridColumn: "8 / 13",
            }}
          />
          <Square
            bgcolor={theme.palette.basic.main}
            radius={{
              mobile: ["4vw", "0.1.1.1"],
              desktop: ["2vw", "0.1.1.1"],
            }}
            sx={{
              gridRow: "13/ 19",
              gridColumn: "13 / 19",
            }}
          />
        </Box>
      </Stack>

      <Typography
        p={3}
        width="100%"
        textAlign="center"
        fontSize={{ xs: "3vw", md: "2.5vw" }}
        fontWeight="bold"
        color={theme.palette.basic.dark}
      >
        {t("registrationPage.jobs.subtitle")}
      </Typography>

      <Stack spacing={10} width="100%" alignItems="center">
        {registrationPage.jobsSection.map((item, index) => (
          <React.Fragment key={`jobs section square number: ${index}`}>
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
          </React.Fragment>
        ))}
      </Stack>
    </Stack>
  );
};

export default JobOpportunitiesSection;
