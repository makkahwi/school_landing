import CardComp from "@/components/common/Card";
import PageSectionColumn from "@/components/common/PageSectionColumn";
import PageSection from "@/components/common/pageSection";
import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { aboutPage } from "@/utils/constants";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
const VisionMissionObjectives = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection>
      {["vision", "mission"].map((item, i) => (
        <PageSectionColumn md={6} key={i}>
          <CardComp bg={theme.palette.orange.main}>
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
          </CardComp>
        </PageSectionColumn>
      ))}

      <PageSectionColumn>
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
      </PageSectionColumn>

      {aboutPage.objectives.map((item, i) => (
        <PageSectionColumn md={4} key={i}>
          <CardComp bg={theme.palette.orange.main}>
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
          </CardComp>
        </PageSectionColumn>
      ))}
    </PageSection>
  );
};

export default VisionMissionObjectives;
