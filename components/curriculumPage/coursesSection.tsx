import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { Stack, Container, Typography, Box } from "@mui/material";
import theme from "@/styles/theme";
import Square from "../shared/Square";
import React from "react";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import { curriculumPage } from "@/utils/constants";
import { CoursesContainerStyles } from "./styles";

const CoursesSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);
  const { locale } = router;

  return (
    <Stack p={5} bgcolor={theme.palette.basic.light}>
      <Typography
        color={theme.palette.orange.main}
        fontWeight="bold"
        fontSize={{ xs: "8vw", md: "2vw" }}
      >
        {t("curriculumPage.courses")}
      </Typography>

      <Stack
        direction={{
          xs: "column",
          md: locale === "ar" ? "row-reverse" : "row",
        }}
        spacing={{ xs: 5, md: 0 }}
        mt={5}
        mb={5}
        sx={CoursesContainerStyles}
      >
        {curriculumPage.courseSquares.map((item, index) => (
          <React.Fragment key={`course square number: ${index}`}>
            <Square
              bgcolor={theme.palette.orange.main}
              radius={{
                mobile: ["10vw", item.edges],
                desktop: ["3vw", item.edges],
              }}
              sx={{
                margin: 0,
                width: { xs: "60vw", md: "15vw" },
                height: { xs: "60vw", md: "15vw" },
              }}
            >
              <Typography
                fontWeight="bold"
                m={0}
                fontSize={{ xs: "7vw", md: "1.7vw" }}
                color={theme.palette.basic.light}
              >
                {t(item.text)}
              </Typography>
            </Square>
          </React.Fragment>
        ))}
      </Stack>
    </Stack>
  );
};

export default CoursesSection;
