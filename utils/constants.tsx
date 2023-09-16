import theme from "@/styles/theme";
import AppleIcon from "@mui/icons-material/Apple";
import BalanceIcon from "@mui/icons-material/Balance";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import BrushIcon from "@mui/icons-material/Brush";
import CalculateIcon from "@mui/icons-material/Calculate";
import ConstructionIcon from "@mui/icons-material/Construction";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ErrorIcon from "@mui/icons-material/Error";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import HomeIcon from "@mui/icons-material/Home";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import MenuBookSharpIcon from "@mui/icons-material/MenuBookSharp";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import MosqueIcon from "@mui/icons-material/Mosque";
import PeopleIcon from "@mui/icons-material/People";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PublicIcon from "@mui/icons-material/Public";
import SchoolIcon from "@mui/icons-material/School";
import ScienceIcon from "@mui/icons-material/Science";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import TranslateIcon from "@mui/icons-material/Translate";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import { ReactNode } from "react";

interface navbarItemsProps {
  color: string;
  size: string;
}

export const departmentColors = {
  academic: theme.palette.blue.dark,
  engage: theme.palette.orange.main,
  about: theme.palette.blue.light,
  community: theme.palette.basic.light,
};

/**
 *  navbar constants
 */

export const navbarPage = {
  navbarItems: ({
    color,
    size,
  }: navbarItemsProps): {
    data: string;
    href: string;
    icon: ReactNode;
  }[] => {
    return [
      {
        data: "navbar.navItems.home",
        href: "/",
        icon: (
          <HomeIcon
            sx={{
              color: color,
              width: size,
              height: size,
              transition: "0.7s ease",
            }}
          />
        ),
      },
      {
        data: "navbar.navItems.academic",
        href: "/curriculum",
        icon: (
          <DashboardIcon
            sx={{
              color: color,
              width: size,
              height: size,
              transition: "0.7s ease",
            }}
          />
        ),
      },
      {
        data: "navbar.navItems.engage",
        href: "/engage",
        icon: (
          <PlagiarismIcon
            sx={{
              color: color,
              width: size,
              height: size,
              transition: "0.7s ease",
            }}
          />
        ),
      },
      {
        data: "navbar.navItems.about",
        href: "/about",
        icon: (
          <ErrorIcon
            sx={{
              color: color,
              width: size,
              height: size,
              transition: "0.7s ease",
            }}
          />
        ),
      },
      {
        data: "navbar.navItems.contact",
        href: "/contact",
        icon: (
          <ContactPhoneIcon
            sx={{
              color: color,
              width: size,
              height: size,
              transition: "0.7s ease",
            }}
          />
        ),
      },
      {
        data: "navbar.navItems.community",
        href: "/community",
        icon: (
          <PeopleIcon
            sx={{
              color: color,
              width: size,
              height: size,
              transition: "0.7s ease",
            }}
          />
        ),
      },
    ];
  },
};

/**
 *  landing page constants
 */
export const landingPage = {
  welcomeSquares: [
    {
      radiusMobile: ["1.5vw", "1.1.1.0"],
      radiusDesktop: ["0.5vw", "1.1.1.0"],
      bgcolor: theme.palette.orange.main,
      rows: "10 / 12",
      cols: "20 /22",
    },
    {
      radiusMobile: ["3vw", "1.1.1.0"],
      radiusDesktop: ["1.5vw", "1.1.1.0"],
      bgcolor: theme.palette.brown.main,
      rows: "12 / 16",
      cols: "20 / 24",
    },
    {
      radiusMobile: ["2.5vw", "1.1.0.1"],
      radiusDesktop: ["1.2vw", "1.1.0.1"],
      bgcolor: theme.palette.basic.main,
      rows: "16 / 19",
      cols: "9 / 12",
    },
    {
      radiusMobile: ["6vw", "1.0.1.1"],
      radiusDesktop: ["3vw", "1.0.1.1"],
      bgcolor: theme.palette.orange.main,
      rows: "16 / 24",
      cols: "12 / 20",
    },
    {
      radiusMobile: ["5vw", "0.1.1.1"],
      radiusDesktop: ["2.2vw", "0.1.1.1"],
      bgcolor: theme.palette.blue.dark,
      rows: "16 / 22",
      cols: "20 / 26",
    },
    {
      radiusMobile: ["1.5vw", "0.1.1.1"],
      radiusDesktop: ["0.5vw", "0.1.1.1"],
      bgcolor: theme.palette.brown.main,
      rows: "22 / 24",
      cols: "20 / 22",
    },
  ],

  newsSquares: [
    {
      radiusMobile: ["1.5vw", "1.1.0.1"],
      radiusDesktop: ["0.8vw", "1.1.0.1"],
      bgcolor: theme.palette.blue.dark,
      rows: "3 / 5",
      cols: "8 / 10",
    },
    {
      radiusMobile: ["1.5vw", "1.1.0.1"],
      radiusDesktop: ["1.5vw", "1.1.0.1"],
      bgcolor: theme.palette.basic.main,
      rows: "1 / 5",
      cols: "10 / 14",
    },
    {
      radiusMobile: ["1.5vw", "1.1.0.1"],
      radiusDesktop: ["1.2vw", "1.1.1.0"],
      bgcolor: theme.palette.orange.main,
      rows: "2 / 5",
      cols: "14 / 17",
    },
    {
      radiusMobile: ["1.5vw", "1.1.0.1"],
      radiusDesktop: ["1.2vw", "1.0.1.1"],
      bgcolor: theme.palette.brown.main,
      rows: "5 / 8",
      cols: "11 / 14",
    },
  ],

  news: [
    {
      title: "communityPage.latestNews.item1.title",
      src: "/landingPage/news1.jpeg",
    },
    {
      title: "communityPage.latestNews.item2.title",
      src: "/landingPage/news2.jpeg",
    },
  ],

  widgetLinks: [
    { link: "/about", label: "landingPage.whyAISSection.title" },
    { link: "/academics", label: "landingPage.newsSection.levels" },
    { link: "/academics", label: "landingPage.newsSection.curriculum" },
    { link: "/engage", label: "landingPage.newsSection.registration" },
    { link: "/engage", label: "landingPage.newsSection.job" },
    {
      link: "https://students.aqsa.edu.my",
      label: "landingPage.newsSection.student",
      target: "_blank",
    },
    // {
    //   link: "https://students.aqsa.edu.my",
    //   label: "landingPage.newsSection.staff",
    //   target: "_blank",
    // },
    // { link: "", label: "landingPage.newsSection.website" },
    // { link: "", label: "landingPage.newsSection.data" },
  ],
};

/**
 *  curreculum page constants
 */
export const curriculumPage = {
  clubsItems: (size: string, color: string) => [
    {
      text: "curriculumPage.clubsContents.art",
      icon: <BrushIcon sx={{ width: size, height: size, color: color }} />,
    },
    {
      text: "curriculumPage.clubsContents.arabic",
      icon: (
        <MenuBookSharpIcon sx={{ width: size, height: size, color: color }} />
      ),
    },
    {
      text: "curriculumPage.clubsContents.french",
      icon: <GTranslateIcon sx={{ width: size, height: size, color: color }} />,
    },
    {
      text: "curriculumPage.clubsContents.cooking",
      icon: <FastfoodIcon sx={{ width: size, height: size, color: color }} />,
    },
    {
      text: "curriculumPage.clubsContents.math",
      icon: <CalculateIcon sx={{ width: size, height: size, color: color }} />,
    },
    {
      text: "curriculumPage.clubsContents.chess",
      icon: <PsychologyIcon sx={{ width: size, height: size, color: color }} />,
    },
  ],

  activitiesItems: (size: string, color: string) => [
    {
      text: "curriculumPage.activitiesContents.leisure",
      icon: (
        <VideogameAssetIcon sx={{ width: size, height: size, color: color }} />
      ),
    },
    {
      text: "curriculumPage.activitiesContents.library",
      icon: (
        <MenuBookSharpIcon sx={{ width: size, height: size, color: color }} />
      ),
    },
    {
      text: "curriculumPage.activitiesContents.sports",
      icon: (
        <SportsVolleyballIcon
          sx={{ width: size, height: size, color: color }}
        />
      ),
    },
    {
      text: "curriculumPage.activitiesContents.cultural",
      icon: <TranslateIcon sx={{ width: size, height: size, color: color }} />,
    },
    {
      text: "curriculumPage.activitiesContents.math",
      icon: <CalculateIcon sx={{ width: size, height: size, color: color }} />,
    },
    {
      text: "curriculumPage.activitiesContents.educational",
      icon: <SchoolIcon sx={{ width: size, height: size, color: color }} />,
    },
  ],

  levelsPageSections: [
    {
      title: "curriculumPage.levels.sections.section1.title",
      subTitle: "curriculumPage.levels.sections.section1.subTitle",
      image: "/images/Char-3-Color.png",
      bgColor: "",
      titleColor: theme.palette.orange.main,
      subTitleColor: theme.palette.brown.dark,
      iconsColor: theme.palette.brown.main,

      listElemnts: (size: string, color: string) => [
        {
          text: "curriculumPage.levels.sections.section1.listElemnts.txt1",
          icon: (
            <VideogameAssetIcon
              sx={{ width: size, height: size, color: color }}
            />
          ),
        },
        {
          text: "curriculumPage.levels.sections.section1.listElemnts.txt2",
          icon: (
            <MenuBookSharpIcon
              sx={{ width: size, height: size, color: color }}
            />
          ),
        },
        {
          text: "curriculumPage.levels.sections.section1.listElemnts.txt3",
          icon: (
            <GTranslateIcon sx={{ width: size, height: size, color: color }} />
          ),
        },
        {
          text: "curriculumPage.levels.sections.section1.listElemnts.txt4",
          icon: (
            <ConstructionIcon
              sx={{ width: size, height: size, color: color }}
            />
          ),
        },
        {
          text: "curriculumPage.levels.sections.section1.listElemnts.txt5",
          icon: (
            <CalculateIcon sx={{ width: size, height: size, color: color }} />
          ),
        },
      ],
    },
    {
      title: "curriculumPage.levels.sections.section2.title",
      subTitle: "curriculumPage.levels.sections.section2.subTitle",
      image: "/images/Char-1-White.png",

      bgColor: theme.palette.blue.dark,
      titleColor: theme.palette.orange.main,
      subTitleColor: theme.palette.basic.light,
      iconsColor: theme.palette.orange.main,

      listElemnts: (size: string, color: string) => [
        {
          text: "curriculumPage.levels.sections.section2.listElemnts.txt1",
          icon: <BrushIcon sx={{ width: size, height: size, color: color }} />,
        },
        {
          text: "curriculumPage.levels.sections.section2.listElemnts.txt2",
          icon: (
            <MenuBookSharpIcon
              sx={{ width: size, height: size, color: color }}
            />
          ),
        },
        {
          text: "curriculumPage.levels.sections.section2.listElemnts.txt3",
          icon: (
            <GTranslateIcon sx={{ width: size, height: size, color: color }} />
          ),
        },
        {
          text: "curriculumPage.levels.sections.section2.listElemnts.txt4",
          icon: (
            <ConstructionIcon
              sx={{ width: size, height: size, color: color }}
            />
          ),
        },
        {
          text: "curriculumPage.levels.sections.section2.listElemnts.txt5",
          icon: (
            <CalculateIcon sx={{ width: size, height: size, color: color }} />
          ),
        },
        {
          text: "curriculumPage.levels.sections.section2.listElemnts.txt6",
          icon: (
            <SportsVolleyballIcon
              sx={{ width: size, height: size, color: color }}
            />
          ),
        },
        {
          text: "curriculumPage.levels.sections.section2.listElemnts.txt7",
          icon: <MosqueIcon sx={{ width: size, height: size, color: color }} />,
        },
        {
          text: "curriculumPage.levels.sections.section2.listElemnts.txt8",
          icon: (
            <Brightness3Icon sx={{ width: size, height: size, color: color }} />
          ),
        },
      ],
    },
    {
      title: "curriculumPage.levels.sections.section3.title",
      subTitle: "curriculumPage.levels.sections.section3.subTitle",
      image: "/images/Char-1-Color.png",

      bgColor: theme.palette.basic.light,
      titleColor: theme.palette.blue.dark,
      subTitleColor: theme.palette.basic.dark,
      iconsColor: theme.palette.blue.dark,

      listElemnts: (size: string, color: string) => [
        {
          text: "curriculumPage.levels.sections.section3.listElemnts.txt1",
          icon: (
            <LaptopChromebookIcon
              sx={{ width: size, height: size, color: color }}
            />
          ),
        },
        {
          text: "curriculumPage.levels.sections.section3.listElemnts.txt2",
          icon: (
            <MenuBookSharpIcon
              sx={{ width: size, height: size, color: color }}
            />
          ),
        },
        {
          text: "curriculumPage.levels.sections.section3.listElemnts.txt3",
          icon: (
            <GTranslateIcon sx={{ width: size, height: size, color: color }} />
          ),
        },
        {
          text: "curriculumPage.levels.sections.section3.listElemnts.txt4",
          icon: <PublicIcon sx={{ width: size, height: size, color: color }} />,
        },
        {
          text: "curriculumPage.levels.sections.section3.listElemnts.txt5",
          icon: (
            <ConstructionIcon
              sx={{ width: size, height: size, color: color }}
            />
          ),
        },
        {
          text: "curriculumPage.levels.sections.section3.listElemnts.txt6",
          icon: (
            <CalculateIcon sx={{ width: size, height: size, color: color }} />
          ),
        },
        {
          text: "curriculumPage.levels.sections.section3.listElemnts.txt7",
          icon: (
            <SportsVolleyballIcon
              sx={{ width: size, height: size, color: color }}
            />
          ),
        },
        {
          text: "curriculumPage.levels.sections.section3.listElemnts.txt8",
          icon: <BrushIcon sx={{ width: size, height: size, color: color }} />,
        },
        {
          text: "curriculumPage.levels.sections.section3.listElemnts.txt9",
          icon: (
            <BalanceIcon sx={{ width: size, height: size, color: color }} />
          ),
        },
        {
          text: "curriculumPage.levels.sections.section3.listElemnts.txt10",
          icon: (
            <Brightness3Icon sx={{ width: size, height: size, color: color }} />
          ),
        },
        {
          text: "curriculumPage.levels.sections.section3.listElemnts.txt11",
          icon: <MosqueIcon sx={{ width: size, height: size, color: color }} />,
        },
        {
          text: "curriculumPage.levels.sections.section3.listElemnts.txt12",
          icon: (
            <Brightness3Icon sx={{ width: size, height: size, color: color }} />
          ),
        },
      ],
    },
    {
      title: "curriculumPage.levels.sections.section4.title",
      subTitle: "curriculumPage.levels.sections.section4.subTitle",
      image: "/images/Char-2-Color.png",

      bgColor: theme.palette.orange.main,
      titleColor: theme.palette.basic.light,
      subTitleColor: theme.palette.brown.main,
      iconsColor: theme.palette.basic.light,

      listElemnts: (size: string, color: string) => [
        {
          text: "curriculumPage.levels.sections.section4.listElemnts.txt1",
          icon: (
            <LaptopChromebookIcon
              sx={{ width: size, height: size, color: color }}
            />
          ),
        },
        {
          text: "curriculumPage.levels.sections.section4.listElemnts.txt2",
          icon: (
            <MenuBookSharpIcon
              sx={{ width: size, height: size, color: color }}
            />
          ),
        },
        {
          text: "curriculumPage.levels.sections.section4.listElemnts.txt3",
          icon: (
            <GTranslateIcon sx={{ width: size, height: size, color: color }} />
          ),
        },
        {
          text: "curriculumPage.levels.sections.section3.listElemnts.txt4",
          icon: <PublicIcon sx={{ width: size, height: size, color: color }} />,
        },
        {
          text: "curriculumPage.levels.sections.section4.listElemnts.txt5",
          icon: (
            <ConstructionIcon
              sx={{ width: size, height: size, color: color }}
            />
          ),
        },
        {
          text: "curriculumPage.levels.sections.section4.listElemnts.txt6",
          icon: (
            <CalculateIcon sx={{ width: size, height: size, color: color }} />
          ),
        },
        {
          text: "curriculumPage.levels.sections.section4.listElemnts.txt7",
          icon: (
            <SportsVolleyballIcon
              sx={{ width: size, height: size, color: color }}
            />
          ),
        },
        {
          text: "curriculumPage.levels.sections.section4.listElemnts.txt8",
          icon: <BrushIcon sx={{ width: size, height: size, color: color }} />,
        },
        {
          text: "curriculumPage.levels.sections.section4.listElemnts.txt9",
          icon: (
            <ScienceIcon sx={{ width: size, height: size, color: color }} />
          ),
        },
        {
          text: "curriculumPage.levels.sections.section4.listElemnts.txt10",
          icon: <AppleIcon sx={{ width: size, height: size, color: color }} />,
        },
        {
          text: "curriculumPage.levels.sections.section4.listElemnts.txt11",
          icon: (
            <FingerprintIcon sx={{ width: size, height: size, color: color }} />
          ),
        },
        {
          text: "curriculumPage.levels.sections.section4.listElemnts.txt12",
          icon: (
            <MonetizationOnIcon
              sx={{ width: size, height: size, color: color }}
            />
          ),
        },
        {
          text: "curriculumPage.levels.sections.section4.listElemnts.txt13",
          icon: (
            <BalanceIcon sx={{ width: size, height: size, color: color }} />
          ),
        },
        {
          text: "curriculumPage.levels.sections.section4.listElemnts.txt14",
          icon: (
            <Brightness3Icon sx={{ width: size, height: size, color: color }} />
          ),
        },
        {
          text: "curriculumPage.levels.sections.section4.listElemnts.txt15",
          icon: <MosqueIcon sx={{ width: size, height: size, color: color }} />,
        },
        {
          text: "curriculumPage.levels.sections.section4.listElemnts.txt16",
          icon: (
            <Brightness3Icon sx={{ width: size, height: size, color: color }} />
          ),
        },
      ],
    },
  ],
};

/**
 *  registration page constants
 */
export const registrationPage = {
  structureSection: [
    {
      title: "registrationPage.structure.item1.title",
      items: [
        {
          title: `registrationPage.structure.item1.item1.title`,
          price: `registrationPage.structure.item1.item1.price`,
          description: `registrationPage.structure.item1.item1.description`,
        },
        {
          title: `registrationPage.structure.item1.item2.title`,
          price: `registrationPage.structure.item1.item2.price`,
          description: `registrationPage.structure.item1.item2.description`,
        },
        {
          title: `registrationPage.structure.item1.item3.title`,
          price: `registrationPage.structure.item1.item3.price`,
          description: `registrationPage.structure.item1.item3.description`,
        },
        {
          title: `registrationPage.structure.item1.item4.title`,
          price: `registrationPage.structure.item1.item4.price`,
          description: `registrationPage.structure.item1.item4.description`,
        },
        {
          title: `registrationPage.structure.item1.item5.title`,
          price: `registrationPage.structure.item1.item5.price`,
          description: `registrationPage.structure.item1.item5.description`,
        },
      ],
    },
    {
      title: "registrationPage.structure.item2.title",
      items: [
        {
          title: `registrationPage.structure.item2.item1.title`,
          price: `registrationPage.structure.item2.item1.price`,
          description: `registrationPage.structure.item2.item1.description`,
        },
        {
          title: `registrationPage.structure.item2.item2.title`,
          price: `registrationPage.structure.item2.item2.price`,
          description: `registrationPage.structure.item2.item2.description`,
        },
        {
          title: `registrationPage.structure.item2.item3.title`,
          price: `registrationPage.structure.item2.item3.price`,
          description: `registrationPage.structure.item2.item3.description`,
        },
        {
          title: `registrationPage.structure.item2.item4.title`,
          price: `registrationPage.structure.item2.item4.price`,
          description: `registrationPage.structure.item2.item4.description`,
        },
        {
          title: `registrationPage.structure.item2.item5.title`,
          price: `registrationPage.structure.item2.item5.price`,
          description: `registrationPage.structure.item2.item5.description`,
        },
      ],
    },
    {
      title: "registrationPage.structure.item3.title",
      items: [
        {
          title: "registrationPage.structure.item3.item1.title",
          price: "registrationPage.structure.item3.item1.price",
          description: "registrationPage.structure.item3.item1.description",
        },
      ],
    },
    {
      title: "registrationPage.structure.item4.title",
      items: [
        {
          title: `registrationPage.structure.item4.item1.title`,
          price: `registrationPage.structure.item4.item1.price`,
          description: `registrationPage.structure.item4.item1.description`,
        },
        {
          title: `registrationPage.structure.item4.item2.title`,
          price: `registrationPage.structure.item4.item2.price`,
          description: `registrationPage.structure.item4.item2.description`,
        },
        {
          title: `registrationPage.structure.item4.item3.title`,
          price: `registrationPage.structure.item4.item3.price`,
          description: `registrationPage.structure.item4.item3.description`,
        },
        {
          title: `registrationPage.structure.item4.item4.title`,
          price: `registrationPage.structure.item4.item4.price`,
          description: `registrationPage.structure.item4.item4.description`,
        },
        {
          title: `registrationPage.structure.item4.item5.title`,
          price: `registrationPage.structure.item4.item5.price`,
          description: `registrationPage.structure.item4.item5.description`,
        },
        {
          title: `registrationPage.structure.item4.item6.title`,
          price: `registrationPage.structure.item4.item6.price`,
          description: `registrationPage.structure.item4.item6.description`,
        },
        {
          title: `registrationPage.structure.item4.item7.title`,
          price: `registrationPage.structure.item4.item7.price`,
          description: `registrationPage.structure.item4.item7.description`,
        },
        {
          title: `registrationPage.structure.item4.item8.title`,
          price: `registrationPage.structure.item4.item8.price`,
          description: `registrationPage.structure.item4.item8.description`,
        },
        {
          title: `registrationPage.structure.item4.item9.title`,
          price: `registrationPage.structure.item4.item9.price`,
          description: `registrationPage.structure.item4.item9.description`,
        },
        {
          title: `registrationPage.structure.item4.item10.title`,
          price: `registrationPage.structure.item4.item10.price`,
          description: `registrationPage.structure.item4.item10.description`,
        },
        {
          title: `registrationPage.structure.item4.item11.title`,
          price: `registrationPage.structure.item4.item11.price`,
          description: `registrationPage.structure.item4.item11.description`,
        },
        {
          title: `registrationPage.structure.item4.item12.title`,
          price: `registrationPage.structure.item4.item12.price`,
          description: `registrationPage.structure.item4.item12.description`,
        },
        {
          title: `registrationPage.structure.item4.item13.title`,
          price: `registrationPage.structure.item4.item13.price`,
          description: `registrationPage.structure.item4.item13.description`,
        },
      ],
    },
  ],

  discountSection: [
    {
      title: "registrationPage.discounts.item1.title",
      items: [
        {
          title: "registrationPage.discounts.item1.item1.title",
          price: "registrationPage.discounts.item1.item1.price",
          description: "registrationPage.discounts.item1.item1.description",
        },
      ],
    },
    {
      title: "registrationPage.discounts.item2.title",
      items: [
        {
          title: `registrationPage.discounts.item2.item1.title`,
          price: `registrationPage.discounts.item2.item1.price`,
          description: `registrationPage.discounts.item2.item1.description`,
        },
        {
          title: `registrationPage.discounts.item2.item2.title`,
          price: `registrationPage.discounts.item2.item2.price`,
          description: `registrationPage.discounts.item2.item2.description`,
        },
        {
          title: `registrationPage.discounts.item2.item3.title`,
          price: `registrationPage.discounts.item2.item3.price`,
          description: `registrationPage.discounts.item2.item3.description`,
        },
      ],
    },
    {
      title: "registrationPage.discounts.item3.title",
      items: [
        {
          title: "registrationPage.discounts.item3.item1.title",
          price: "registrationPage.discounts.item3.item1.price",
          description: "registrationPage.discounts.item3.item1.description",
        },
      ],
    },
  ],
};
