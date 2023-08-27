import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { Stack, Container, Typography, Box } from "@mui/material";
import theme from "@/styles/theme";
import { aboutPage } from "@/utils/constants";
import Square from "../common/Square";
import React from "react";

const AISBeginning = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <Stack p={5}>
      <Typography
        fontSize={{
          xs: "10vw",
          md: "3vw",
        }}
        fontWeight="bold"
        color={theme.palette.orange.main}
      >
        {t("aboutPage.beginningAISTitle")}
      </Typography>

      {["1", "2", "3"].map((item, index) => (
        <React.Fragment key={`beginning paragraph item number: ${index}`}>
          <Typography
            mt={2}
            textAlign="justify"
            fontSize={{
              xs: "4vw",
              md: "1.5vw",
            }}
            color={theme.palette.orange.main}
          >
            {t(`aboutPage.foundingStory.paragraph${item}`)}
          </Typography>
        </React.Fragment>
      ))}

      <Typography
        mt={10}
        mb={5}
        fontSize={{
          xs: "10vw",
          md: "3vw",
        }}
        fontWeight="bold"
        color={theme.palette.orange.main}
      >
        {t("aboutPage.visionAndMisiion")}
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-evenly"
      >
        {["vision", "mission"].map((item, index) => (
          <React.Fragment key={`vision/mission item number: ${index}`}>
            <Square
              bgcolor={theme.palette.orange.main}
              radius={{
                mobile: ["4vw", "1.1.1.1"],
                desktop: ["2vw", "1.1.1.1"],
              }}
              sx={{
                padding: 5,
                width: { xs: "80%", md: "40%" },
              }}
            >
              <Stack height="100%" justifyContent="flex-start">
                <Typography
                  fontSize={{
                    xs: "10vw",
                    md: "3vw",
                  }}
                  color={theme.palette.basic.light}
                >
                  {t(`aboutPage.${item}.title`)}
                </Typography>

                <Typography
                  fontSize={{
                    xs: "4vw",
                    md: "1.5vw",
                  }}
                  color={theme.palette.basic.light}
                >
                  {t(`aboutPage.${item}.text`)}
                </Typography>
              </Stack>
            </Square>
          </React.Fragment>
        ))}
      </Stack>

      <Typography
        mt={10}
        mb={5}
        fontSize={{
          xs: "10vw",
          md: "3vw",
        }}
        fontWeight="bold"
        color={theme.palette.orange.main}
      >
        {t("aboutPage.objectives.title")}
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        {aboutPage.objectives.map((item, index) => (
          <React.Fragment key={`objective item number: ${index}`}>
            <Square
              bgcolor={theme.palette.orange.main}
              radius={{
                mobile: ["4vw", "1.1.1.1"],
                desktop: ["2vw", "1.1.1.1"],
              }}
              sx={{
                padding: 5,
                marginBottom: 5,
                width: { xs: "80%", md: "40%" },
              }}
            >
              <Stack
                height="100%"
                justifyContent="flex-start"
                alignItems="center"
              >
                {item.icon}

                <Typography
                  fontSize={{
                    xs: "10vw",
                    md: "3vw",
                  }}
                  color={theme.palette.basic.light}
                >
                  {t(item.title)}
                </Typography>

                <Typography
                  fontSize={{
                    xs: "4vw",
                    md: "1.5vw",
                  }}
                  color={theme.palette.basic.light}
                >
                  {t(item.text)}
                </Typography>
              </Stack>
            </Square>
          </React.Fragment>
        ))}
      </Stack>

      <Typography
        mt={10}
        mb={5}
        fontSize={{
          xs: "10vw",
          md: "3vw",
        }}
        fontWeight="bold"
        color={theme.palette.orange.main}
      >
        {t("aboutPage.campus.title")}
      </Typography>

      {["1", "2"].map((item, index) => (
        <React.Fragment
          key={`beginning campus paragraph item number: ${index}`}
        >
          <Typography
            mt={2}
            textAlign="justify"
            fontSize={{
              xs: "4vw",
              md: "1.5vw",
            }}
            color={theme.palette.orange.main}
          >
            {t(`aboutPage.campus.paragraph${item}`)}
          </Typography>
        </React.Fragment>
      ))}
    </Stack>
  );
};

export default AISBeginning;
