import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { curriculumPage } from "@/utils/constants";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import Square from "../../components/common/Square";
import { LanguagesGrid, TitleStyles } from "../../components/Curriculum/styles";
import Text from "../common/Text";

const LanguagesSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection bg="">
      <PageSectionColumn md={6}>
        <Box sx={LanguagesGrid}>
          <Square
            bgcolor={theme.palette.brown.main}
            radius={{
              mobile: ["5.5vw", "1.1.0.1"],
              desktop: ["3vw", "1.1.0.1"],
            }}
            sx={{
              gridRow: "1 / 5",
              gridColumn: "2 / 6",
            }}
          >
            <Typography
              fontSize={{
                xs: "2.5vw",
                md: "1vw",
              }}
              fontWeight="bold"
              color={theme.palette.orange.main}
              textAlign="center"
            >
              Selamat Datang
            </Typography>
          </Square>

          <Square
            bgcolor={theme.palette.blue.dark}
            radius={{
              mobile: ["6vw", "1.0.1.1"],
              desktop: ["3vw", "1.0.1.1"],
            }}
            sx={{
              gridRow: "5 / 10",
              gridColumn: "1 / 6",
            }}
          >
            <Typography
              fontSize={{
                xs: "3.75vw",
                md: "1.5vw",
              }}
              fontWeight="bold"
              color="white"
              textAlign="center"
            >
              Welcome
            </Typography>
          </Square>

          <Square
            bgcolor={theme.palette.brown.main}
            radius={{
              mobile: ["2vw", "1.0.1.1"],
              desktop: ["1.5vw", "1.0.1.1"],
            }}
            sx={{
              gridRow: "10 / 12",
              gridColumn: "4 / 6",
            }}
          />

          <Square
            bgcolor={theme.palette.orange.main}
            radius={{
              mobile: ["7vw", "0.1.1.1"],
              desktop: ["4vw", "0.1.1.1"],
            }}
            sx={{
              gridRow: "5 / 12",
              gridColumn: "6 / 13",
            }}
          >
            <Typography
              fontSize={{
                xs: "5vw",
                md: "2vw",
              }}
              fontWeight="bold"
              color={theme.palette.brown.main}
              textAlign="center"
            >
              أهلاً وسهلاً
            </Typography>
          </Square>

          <Typography sx={TitleStyles}>
            {t("curriculumPage.languages")}
          </Typography>
        </Box>
      </PageSectionColumn>

      <PageSectionColumn md={6}>
        {curriculumPage.languages.map((item, i) => (
          <Stack pb={5} key={i}>
            <Text variant="subtitle" color={theme.palette.blue.dark}>
              {t(item.title)}
            </Text>

            <Text justify>{t(item.content)}</Text>
          </Stack>
        ))}
      </PageSectionColumn>
    </PageSection>
  );
};

export default LanguagesSection;
