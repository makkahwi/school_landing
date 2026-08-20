import PageHeader from "@/components/common/PageHeader";
import LevelSection from "@/components/Curriculum/LevelSection";
import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import {
  defaultStudyLevels,
  StudyLevelSetting,
} from "@/utils/adminContent";
import { fetchFirebaseContent } from "@/utils/firebaseContent";
import { departmentColors } from "@/utils/constants";
import AppleIcon from "@mui/icons-material/Apple";
import BalanceIcon from "@mui/icons-material/Balance";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import BrushIcon from "@mui/icons-material/Brush";
import CalculateIcon from "@mui/icons-material/Calculate";
import ConstructionIcon from "@mui/icons-material/Construction";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import MenuBookSharpIcon from "@mui/icons-material/MenuBookSharp";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import MosqueIcon from "@mui/icons-material/Mosque";
import PublicIcon from "@mui/icons-material/Public";
import ScienceIcon from "@mui/icons-material/Science";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

export default function StudyLevels() {
  const router = useRouter();
  const { t } = useTranslation(router);
  const fallbackStudyLevels = useMemo(() => defaultStudyLevels(t), [t]);
  const [adminStudyLevels, setAdminStudyLevels] =
    useState<StudyLevelSetting[]>(fallbackStudyLevels);

  useEffect(() => {
    const sync = () => {
      fetchFirebaseContent()
        .then((stored) =>
          setAdminStudyLevels(
            stored.studyLevels?.length
              ? stored.studyLevels
              : fallbackStudyLevels,
          ),
        )
        .catch(() => setAdminStudyLevels(fallbackStudyLevels));
    };

    sync();
    window.addEventListener("ais-admin-content-updated", sync);
    return () => {
      window.removeEventListener("ais-admin-content-updated", sync);
    };
  }, [fallbackStudyLevels]);

  const levelSections = [
    {
      title: t("Academics.StudyLevels.KG.Title"),
      subTitle: t("Academics.StudyLevels.KG.Description"),
      image: "/images/Char-3-Color.png",
      bgColor: "",
      titleColor: theme.palette.brown.main,
      subTitleColor: theme.palette.brown.main,
      iconsColor: theme.palette.brown.main,
      listElemnts: (size: string, color: string) => [
        {
          text: t("Academics.StudyLevels.KG.Courses.Course1"),
          icon: (
            <VideogameAssetIcon
              sx={{ width: size, height: size, color: color }}
            />
          ),
        },
        {
          text: t("Academics.StudyLevels.KG.Courses.Course2"),
          icon: (
            <MenuBookSharpIcon
              sx={{ width: size, height: size, color: color }}
            />
          ),
        },
        {
          text: t("Academics.StudyLevels.KG.Courses.Course3"),
          icon: (
            <GTranslateIcon sx={{ width: size, height: size, color: color }} />
          ),
        },
        {
          text: t("Academics.StudyLevels.KG.Courses.Course4"),
          icon: (
            <ConstructionIcon
              sx={{ width: size, height: size, color: color }}
            />
          ),
        },
        {
          text: t("Academics.StudyLevels.KG.Courses.Course5"),
          icon: (
            <CalculateIcon sx={{ width: size, height: size, color: color }} />
          ),
        },
      ],
    },
    {
      title: t("Academics.StudyLevels.Levels1To2.Title"),
      subTitle: t("Academics.StudyLevels.Levels1To2.Description"),
      image: "/images/Char-1-White.png",

      bgColor: theme.palette.blue.dark,
      titleColor: theme.palette.basic.light,
      subTitleColor: theme.palette.basic.light,
      iconsColor: theme.palette.basic.light,

      listElemnts: (size: string, color: string) => [
        {
          text: t("Academics.StudyLevels.Levels1To2.Courses.Course1"),
          icon: <BrushIcon sx={{ width: size, height: size, color: color }} />,
        },
        {
          text: t("Academics.StudyLevels.Levels1To2.Courses.Course2"),
          icon: (
            <MenuBookSharpIcon
              sx={{ width: size, height: size, color: color }}
            />
          ),
        },
        {
          text: t("Academics.StudyLevels.Levels1To2.Courses.Course3"),
          icon: (
            <GTranslateIcon sx={{ width: size, height: size, color: color }} />
          ),
        },
        {
          text: t("Academics.StudyLevels.Levels1To2.Courses.Course4"),
          icon: (
            <ConstructionIcon
              sx={{ width: size, height: size, color: color }}
            />
          ),
        },
        {
          text: t("Academics.StudyLevels.Levels1To2.Courses.Course5"),
          icon: (
            <CalculateIcon sx={{ width: size, height: size, color: color }} />
          ),
        },
        {
          text: t("Academics.StudyLevels.Levels1To2.Courses.Course6"),
          icon: (
            <SportsVolleyballIcon
              sx={{ width: size, height: size, color: color }}
            />
          ),
        },
        {
          text: t("Academics.StudyLevels.Levels1To2.Courses.Course7"),
          icon: <MosqueIcon sx={{ width: size, height: size, color: color }} />,
        },
        {
          text: t("Academics.StudyLevels.Levels1To2.Courses.Course8"),
          icon: (
            <Brightness3Icon sx={{ width: size, height: size, color: color }} />
          ),
        },
      ],
    },
    {
      title: t("Academics.StudyLevels.Levels3To6.Title"),
      subTitle: t("Academics.StudyLevels.Levels3To6.Description"),
      image: "/images/Char-1-Color.png",

      bgColor: theme.palette.basic.light,
      titleColor: theme.palette.blue.dark,
      subTitleColor: theme.palette.blue.dark,
      iconsColor: theme.palette.blue.dark,

      listElemnts: (size: string, color: string) => [
        {
          text: t("Academics.StudyLevels.Levels3To6.Courses.Course1"),
          icon: (
            <LaptopChromebookIcon
              sx={{ width: size, height: size, color: color }}
            />
          ),
        },
        {
          text: t("Academics.StudyLevels.Levels3To6.Courses.Course2"),
          icon: (
            <MenuBookSharpIcon
              sx={{ width: size, height: size, color: color }}
            />
          ),
        },
        {
          text: t("Academics.StudyLevels.Levels3To6.Courses.Course3"),
          icon: (
            <GTranslateIcon sx={{ width: size, height: size, color: color }} />
          ),
        },
        {
          text: t("Academics.StudyLevels.Levels3To6.Courses.Course4"),
          icon: <PublicIcon sx={{ width: size, height: size, color: color }} />,
        },
        {
          text: t("Academics.StudyLevels.Levels3To6.Courses.Course5"),
          icon: (
            <ConstructionIcon
              sx={{ width: size, height: size, color: color }}
            />
          ),
        },
        {
          text: t("Academics.StudyLevels.Levels3To6.Courses.Course6"),
          icon: (
            <CalculateIcon sx={{ width: size, height: size, color: color }} />
          ),
        },
        {
          text: t("Academics.StudyLevels.Levels3To6.Courses.Course7"),
          icon: (
            <SportsVolleyballIcon
              sx={{ width: size, height: size, color: color }}
            />
          ),
        },
        {
          text: t("Academics.StudyLevels.Levels3To6.Courses.Course8"),
          icon: <BrushIcon sx={{ width: size, height: size, color: color }} />,
        },
        {
          text: t("Academics.StudyLevels.Levels3To6.Courses.Course9"),
          icon: (
            <BalanceIcon sx={{ width: size, height: size, color: color }} />
          ),
        },
        {
          text: t("Academics.StudyLevels.Levels3To6.Courses.Course10"),
          icon: (
            <Brightness3Icon sx={{ width: size, height: size, color: color }} />
          ),
        },
        {
          text: t("Academics.StudyLevels.Levels3To6.Courses.Course11"),
          icon: <MosqueIcon sx={{ width: size, height: size, color: color }} />,
        },
        {
          text: t("Academics.StudyLevels.Levels3To6.Courses.Course12"),
          icon: (
            <Brightness3Icon sx={{ width: size, height: size, color: color }} />
          ),
        },
      ],
    },
    {
      title: t("Academics.StudyLevels.Levels7To12.Title"),
      subTitle: t("Academics.StudyLevels.Levels7To12.Description"),
      image: "/images/Char-2-Color.png",

      bgColor: theme.palette.blue.dark,
      titleColor: theme.palette.basic.light,
      subTitleColor: theme.palette.basic.light,
      iconsColor: theme.palette.basic.light,

      listElemnts: (size: string, color: string) => [
        {
          text: t("Academics.StudyLevels.Levels7To12.Courses.Course1"),
          icon: (
            <LaptopChromebookIcon
              sx={{ width: size, height: size, color: color }}
            />
          ),
        },
        {
          text: t("Academics.StudyLevels.Levels7To12.Courses.Course2"),
          icon: (
            <MenuBookSharpIcon
              sx={{ width: size, height: size, color: color }}
            />
          ),
        },
        {
          text: t("Academics.StudyLevels.Levels7To12.Courses.Course3"),
          icon: (
            <GTranslateIcon sx={{ width: size, height: size, color: color }} />
          ),
        },
        {
          text: t("Academics.StudyLevels.Levels3To6.Courses.Course4"),
          icon: <PublicIcon sx={{ width: size, height: size, color: color }} />,
        },
        {
          text: t("Academics.StudyLevels.Levels7To12.Courses.Course5"),
          icon: (
            <ConstructionIcon
              sx={{ width: size, height: size, color: color }}
            />
          ),
        },
        {
          text: t("Academics.StudyLevels.Levels7To12.Courses.Course6"),
          icon: (
            <CalculateIcon sx={{ width: size, height: size, color: color }} />
          ),
        },
        {
          text: t("Academics.StudyLevels.Levels7To12.Courses.Course7"),
          icon: (
            <SportsVolleyballIcon
              sx={{ width: size, height: size, color: color }}
            />
          ),
        },
        {
          text: t("Academics.StudyLevels.Levels7To12.Courses.Course8"),
          icon: <BrushIcon sx={{ width: size, height: size, color: color }} />,
        },
        {
          text: t("Academics.StudyLevels.Levels7To12.Courses.Course9"),
          icon: (
            <ScienceIcon sx={{ width: size, height: size, color: color }} />
          ),
        },
        {
          text: t("Academics.StudyLevels.Levels7To12.Courses.Course10"),
          icon: <AppleIcon sx={{ width: size, height: size, color: color }} />,
        },
        {
          text: t("Academics.StudyLevels.Levels7To12.Courses.Course11"),
          icon: (
            <FingerprintIcon sx={{ width: size, height: size, color: color }} />
          ),
        },
        {
          text: t("Academics.StudyLevels.Levels7To12.Courses.Course12"),
          icon: (
            <MonetizationOnIcon
              sx={{ width: size, height: size, color: color }}
            />
          ),
        },
        {
          text: t("Academics.StudyLevels.Levels7To12.Courses.Course13"),
          icon: (
            <BalanceIcon sx={{ width: size, height: size, color: color }} />
          ),
        },
        {
          text: t("Academics.StudyLevels.Levels7To12.Courses.Course14"),
          icon: (
            <Brightness3Icon sx={{ width: size, height: size, color: color }} />
          ),
        },
        {
          text: t("Academics.StudyLevels.Levels7To12.Courses.Course15"),
          icon: <MosqueIcon sx={{ width: size, height: size, color: color }} />,
        },
        {
          text: t("Academics.StudyLevels.Levels7To12.Courses.Course16"),
          icon: (
            <Brightness3Icon sx={{ width: size, height: size, color: color }} />
          ),
        },
      ],
    },
  ];

  return (
    <Stack>
      <PageHeader
        bg={departmentColors.academic}
        title={t("Academics.StudyLevels.Title")}
      />

      {adminStudyLevels.map((level, i) => {
        const section = levelSections[i % levelSections.length];
        const renderedSection = {
          ...section,
          title: level.title || section.title,
          subTitle: level.description || section.subTitle,
          listElemnts: (size: string, color: string) =>
            (level.courses?.length
              ? level.courses
              : section.listElemnts(size, color).map((item) => item.text)
            ).map((text, index) => ({
              text,
              icon:
                section.listElemnts(size, color)[
                  index % section.listElemnts(size, color).length
                ]?.icon,
            })),
        };

        return (
          <LevelSection section={renderedSection} key={level.key || i} />
        );
      })}
    </Stack>
  );
}
