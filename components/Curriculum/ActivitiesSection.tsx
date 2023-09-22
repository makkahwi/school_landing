import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import CalculateIcon from "@mui/icons-material/Calculate";
import MenuBookSharpIcon from "@mui/icons-material/MenuBookSharp";
import SchoolIcon from "@mui/icons-material/School";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import TranslateIcon from "@mui/icons-material/Translate";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import { useRouter } from "next/router";
import PageSection from "../common/PageSection";
import PageSectionColumn from "../common/PageSectionColumn";
import StaticList from "../common/StaticList";
import Text from "../common/Text";

const ActivitiesSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const activitiesItems = (size: string, color: string) => [
    {
      text: t("Academics.CoCurriculum.Activities.Leisure"),
      icon: (
        <VideogameAssetIcon sx={{ width: size, height: size, color: color }} />
      ),
    },
    {
      text: t("Academics.CoCurriculum.Activities.Library"),
      icon: (
        <MenuBookSharpIcon sx={{ width: size, height: size, color: color }} />
      ),
    },
    {
      text: t("Academics.CoCurriculum.Activities.Sports"),
      icon: (
        <SportsVolleyballIcon
          sx={{ width: size, height: size, color: color }}
        />
      ),
    },
    {
      text: t("Academics.CoCurriculum.Activities.Cultural"),
      icon: <TranslateIcon sx={{ width: size, height: size, color: color }} />,
    },
    {
      text: t("Academics.CoCurriculum.Activities.Math"),
      icon: <CalculateIcon sx={{ width: size, height: size, color: color }} />,
    },
    {
      text: t("Academics.CoCurriculum.Activities.Educational"),
      icon: <SchoolIcon sx={{ width: size, height: size, color: color }} />,
    },
    {
      text: t("Academics.CoCurriculum.Activities.Quran"),
      icon: <SchoolIcon sx={{ width: size, height: size, color: color }} />,
    },
    {
      text: t("Academics.CoCurriculum.Activities.Sunnah"),
      icon: <SchoolIcon sx={{ width: size, height: size, color: color }} />,
    },
    {
      text: t("Academics.CoCurriculum.Activities.Visits"),
      icon: <SchoolIcon sx={{ width: size, height: size, color: color }} />,
    },
  ];

  return (
    <PageSection bg={theme.palette.basic.light}>
      <PageSectionColumn>
        <Text color={theme.palette.brown.main} variant="title">
          {t("Academics.CoCurriculum.Activities.Title")}
        </Text>
      </PageSectionColumn>

      <PageSectionColumn>
        <StaticList
          items={activitiesItems("50%", theme.palette.brown.main)}
          color={theme.palette.brown.main}
        />
      </PageSectionColumn>
    </PageSection>
  );
};

export default ActivitiesSection;
