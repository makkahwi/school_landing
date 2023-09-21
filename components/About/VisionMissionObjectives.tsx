import CardComp from "@/components/common/Card";
import PageSection from "@/components/common/PageSection";
import PageSectionColumn from "@/components/common/PageSectionColumn";
import Text from "@/components/common/Text";
import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import BarChartIcon from "@mui/icons-material/BarChart";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import ExploreIcon from "@mui/icons-material/Explore";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { useRouter } from "next/router";

const VisionMissionObjectives = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const objectives = [
    {
      title: t("aboutPage.objectives.items.item1.title"),
      text: t("aboutPage.objectives.items.item1.text"),
      icon: (
        <ExploreIcon
          sx={{
            color: theme.palette.basic.light,
            width: "10%",
            height: "auto",
          }}
        />
      ),
    },
    {
      title: t("aboutPage.objectives.items.item2.title"),
      text: t("aboutPage.objectives.items.item2.text"),
      icon: (
        <PersonIcon
          sx={{
            color: theme.palette.basic.light,
            width: "10%",
            height: "auto",
          }}
        />
      ),
    },
    {
      title: t("aboutPage.objectives.items.item3.title"),
      text: t("aboutPage.objectives.items.item3.text"),
      icon: (
        <PsychologyIcon
          sx={{
            color: theme.palette.basic.light,
            width: "10%",
            height: "auto",
          }}
        />
      ),
    },
    {
      title: t("aboutPage.objectives.items.item4.title"),
      text: t("aboutPage.objectives.items.item4.text"),
      icon: (
        <BarChartIcon
          sx={{
            color: theme.palette.basic.light,
            width: "10%",
            height: "auto",
          }}
        />
      ),
    },
    {
      title: t("aboutPage.objectives.items.item5.title"),
      text: t("aboutPage.objectives.items.item5.text"),
      icon: (
        <Brightness3Icon
          sx={{
            color: theme.palette.basic.light,
            width: "10%",
            height: "auto",
          }}
        />
      ),
    },
    {
      title: t("aboutPage.objectives.items.item6.title"),
      text: t("aboutPage.objectives.items.item6.text"),
      icon: (
        <HomeIcon
          sx={{
            color: theme.palette.basic.light,
            width: "10%",
            height: "auto",
          }}
        />
      ),
    },
  ];

  return (
    <PageSection>
      {["vision", "mission"].map((item, i) => (
        <PageSectionColumn md={6} key={i}>
          <CardComp bg={theme.palette.blue.dark}>
            <Text
              color={theme.palette.basic.light}
              variant="subTitle"
              center
              bold
            >
              {t(`aboutPage.${item}.title`)}
            </Text>

            <Text color={theme.palette.basic.light} justify doubleHeight>
              {t(`aboutPage.${item}.text`)}
            </Text>
          </CardComp>
        </PageSectionColumn>
      ))}

      <PageSectionColumn>
        <Text color={theme.palette.orange.main} variant="subtitle">
          {t("aboutPage.objectives.title")}
        </Text>
      </PageSectionColumn>

      {objectives.map((item, i) => (
        <PageSectionColumn md={4} key={i}>
          <CardComp bg={theme.palette.blue.dark}>
            {item.icon}

            <Text
              color={theme.palette.basic.light}
              variant="cardTitle"
              center
              bold
            >
              {item.title}
            </Text>

            <Text color={theme.palette.basic.light} justify doubleHeight>
              {item.text}
            </Text>
          </CardComp>
        </PageSectionColumn>
      ))}
    </PageSection>
  );
};

export default VisionMissionObjectives;
