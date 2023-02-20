import { IoIosBook, IoIosBrush } from "react-icons/io";
import { TbLanguage } from "react-icons/tb";
import { MdFastfood } from "react-icons/md";
import { CgMathDivide } from "react-icons/cg";
import { FaChess, FaLanguage, FaSchool } from "react-icons/fa";
import { BiJoystick, BiBasketball } from "react-icons/bi";
import { ReactNode } from "react";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import ErrorIcon from "@mui/icons-material/Error";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import SendIcon from "@mui/icons-material/Send";
import theme from "@/styles/theme";
import BrushIcon from "@mui/icons-material/Brush";
import MenuBookSharpIcon from "@mui/icons-material/MenuBookSharp";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import CalculateIcon from "@mui/icons-material/Calculate";
import PsychologyIcon from "@mui/icons-material/Psychology";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import TranslateIcon from "@mui/icons-material/Translate";
import SchoolIcon from "@mui/icons-material/School";

interface navbarItemsProps {
    color: string;
    size: string;
}

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
                href: "/levels",
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
                href: "/latest",
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
                data: "navbar.navItems.unlock",
                href: "/registration",
                icon: (
                    <LockOpenIcon
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
                data: "navbar.navItems.jobs",
                href: "/jobs",
                icon: (
                    <SendIcon
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
            rows: "5 / 7",
            cols: "15 / 17",
        },
        {
            radiusMobile: ["3vw", "1.1.1.0"],
            radiusDesktop: ["1.5vw", "1.1.1.0"],
            bgcolor: theme.palette.brown.main,
            rows: "7 / 11",
            cols: "15 / 19",
        },
        {
            radiusMobile: ["2.5vw", "1.1.0.1"],
            radiusDesktop: ["1.2vw", "1.1.0.1"],
            bgcolor: theme.palette.basic.light,
            rows: "11 / 14",
            cols: "4 / 7",
        },
        {
            radiusMobile: ["6vw", "1.0.1.1"],
            radiusDesktop: ["3vw", "1.0.1.1"],
            bgcolor: theme.palette.orange.main,
            rows: "11 / 19",
            cols: "7 / 15",
        },
        {
            radiusMobile: ["5vw", "0.1.1.1"],
            radiusDesktop: ["2.2vw", "0.1.1.1"],
            bgcolor: theme.palette.blue.dark,
            rows: "11 / 17",
            cols: "15 / 21",
        },
        {
            radiusMobile: ["1.5vw", "0.1.1.1"],
            radiusDesktop: ["0.5vw", "0.1.1.1"],
            bgcolor: theme.palette.brown.main,
            rows: "17 / 19",
            cols: "15 / 17",
        },
    ],

    whyAIS_icons: [
        {
            src: "/landingPage/islamic-icon.png",
            alt: "islamic-icon",
            text: "landingPage.whyAISSection.items.item1",
        },
        {
            src: "/landingPage/cambridge-icon.png",
            alt: "cambridge-icon",
            text: "landingPage.whyAISSection.items.item2",
        },
        {
            src: "/landingPage/cheap-zone-icon.png",
            alt: "cheap-zone-icon",
            text: "landingPage.whyAISSection.items.item3",
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
            bgcolor: theme.palette.basic.light,
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
            title: "AIS Received Rahmaniya School Delegation",
            src: "/landingPage/news1.jpeg",
        },
        {
            title: "'Ebadur Rahman' institute in AIS",
            src: "/landingPage/news2.jpeg",
        },
    ],

    newsFeatures: [
        "landingPage.newsSection.job",
        "landingPage.newsSection.student",
        "landingPage.newsSection.registration",
        "landingPage.newsSection.staff",
        "landingPage.newsSection.curriculum",
        "landingPage.newsSection.website",
        "landingPage.newsSection.levels",
        "landingPage.newsSection.data",
    ],
};

/**
 *  curreculum page constants
 */
export const curriculumPage = {
    courseSquares: [
        {
            text: "curriculumPage.courseSquares.languages",
            edges: "1.0.1.1",
        },
        {
            text: "curriculumPage.courseSquares.islamic",
            edges: "0.0.1.1",
        },
        {
            text: "curriculumPage.courseSquares.modern",
            edges: "0.1.1.1",
        },
    ],

    languages: [
        {
            title: "curriculumPage.languagesContents.arabic",
            content: "curriculumPage.languagesContents.arabicContent",
        },
        {
            title: "curriculumPage.languagesContents.english",
            content: "curriculumPage.languagesContents.englishContent",
        },
        {
            title: "curriculumPage.languagesContents.malay",
            content: "curriculumPage.languagesContents.malayContent",
        },
    ],

    clubsItems: (size: string, color: string) => [
        {
            text: "curriculumPage.clubsContents.art",
            icon: (
                <BrushIcon sx={{ width: size, height: size, color: color }} />
            ),
        },
        {
            text: "curriculumPage.clubsContents.arabic",
            icon: (
                <MenuBookSharpIcon
                    sx={{ width: size, height: size, color: color }}
                />
            ),
        },
        {
            text: "curriculumPage.clubsContents.french",
            icon: (
                <GTranslateIcon
                    sx={{ width: size, height: size, color: color }}
                />
            ),
        },
        {
            text: "curriculumPage.clubsContents.cooking",
            icon: (
                <FastfoodIcon
                    sx={{ width: size, height: size, color: color }}
                />
            ),
        },
        {
            text: "curriculumPage.clubsContents.math",
            icon: (
                <CalculateIcon
                    sx={{ width: size, height: size, color: color }}
                />
            ),
        },
        {
            text: "curriculumPage.clubsContents.chess",
            icon: (
                <PsychologyIcon
                    sx={{ width: size, height: size, color: color }}
                />
            ),
        },
    ],

    activitiesItems: (size: string, color: string) => [
        {
            text: "curriculumPage.activitiesContents.leisure",
            icon: (
                <VideogameAssetIcon
                    sx={{ width: size, height: size, color: color }}
                />
            ),
        },
        {
            text: "curriculumPage.activitiesContents.library",
            icon: (
                <MenuBookSharpIcon
                    sx={{ width: size, height: size, color: color }}
                />
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
            icon: (
                <TranslateIcon
                    sx={{ width: size, height: size, color: color }}
                />
            ),
        },
        {
            text: "curriculumPage.activitiesContents.math",
            icon: (
                <CalculateIcon
                    sx={{ width: size, height: size, color: color }}
                />
            ),
        },
        {
            text: "curriculumPage.activitiesContents.educational",
            icon: (
                <SchoolIcon sx={{ width: size, height: size, color: color }} />
            ),
        },
    ],
};

/**
 *  levels page constants
 */
export const levelsPageSections = [
    {
        title: "levelsPage.sections.section1.title",
        subTitle: "levelsPage.sections.section1.subTitle",
        image: "",

        bgColor: theme.palette.basic.main,
        titleColor: theme.palette.orange.main,
        subTitleColor: theme.palette.basic.dark,
        iconsColor: theme.palette.orange.main,

        listElemnts: (size: string, color: string) => [
            {
                text: "levelsPage.sections.section1.listElemnts.txt1",
                icon: (
                    <BrushIcon
                        sx={{ width: size, height: size, color: color }}
                    />
                ),
            },
            {
                text: "levelsPage.sections.section1.listElemnts.txt2",
                icon: (
                    <BrushIcon
                        sx={{ width: size, height: size, color: color }}
                    />
                ),
            },
            {
                text: "levelsPage.sections.section1.listElemnts.txt3",
                icon: (
                    <BrushIcon
                        sx={{ width: size, height: size, color: color }}
                    />
                ),
            },
            {
                text: "levelsPage.sections.section1.listElemnts.txt4",
                icon: (
                    <BrushIcon
                        sx={{ width: size, height: size, color: color }}
                    />
                ),
            },
            {
                text: "levelsPage.sections.section1.listElemnts.txt5",
                icon: (
                    <BrushIcon
                        sx={{ width: size, height: size, color: color }}
                    />
                ),
            },
        ],
    },
    {
        title: "levelsPage.sections.section2.title",
        subTitle: "levelsPage.sections.section2.subTitle",
        image: "",

        bgColor: theme.palette.blue.dark,
        titleColor: theme.palette.orange.main,
        subTitleColor: theme.palette.basic.light,
        iconsColor: theme.palette.orange.main,

        listElemnts: (size: string, color: string) => [
            {
                text: "levelsPage.sections.section2.listElemnts.txt1",
                icon: (
                    <BrushIcon
                        sx={{ width: size, height: size, color: color }}
                    />
                ),
            },
            {
                text: "levelsPage.sections.section2.listElemnts.txt2",
                icon: (
                    <BrushIcon
                        sx={{ width: size, height: size, color: color }}
                    />
                ),
            },
            {
                text: "levelsPage.sections.section2.listElemnts.txt3",
                icon: (
                    <BrushIcon
                        sx={{ width: size, height: size, color: color }}
                    />
                ),
            },
            {
                text: "levelsPage.sections.section2.listElemnts.txt4",
                icon: (
                    <BrushIcon
                        sx={{ width: size, height: size, color: color }}
                    />
                ),
            },
            {
                text: "levelsPage.sections.section2.listElemnts.txt5",
                icon: (
                    <BrushIcon
                        sx={{ width: size, height: size, color: color }}
                    />
                ),
            },
            {
                text: "levelsPage.sections.section2.listElemnts.txt6",
                icon: (
                    <BrushIcon
                        sx={{ width: size, height: size, color: color }}
                    />
                ),
            },
        ],
    },
    {
        title: "levelsPage.sections.section3.title",
        subTitle: "levelsPage.sections.section3.subTitle",
        image: "",

        bgColor: theme.palette.orange.main,
        titleColor: theme.palette.basic.light,
        subTitleColor: theme.palette.basic.dark,
        iconsColor: theme.palette.basic.light,

        listElemnts: (size: string, color: string) => [
            {
                text: "levelsPage.sections.section3.listElemnts.txt1",
                icon: (
                    <BrushIcon
                        sx={{ width: size, height: size, color: color }}
                    />
                ),
            },
            {
                text: "levelsPage.sections.section3.listElemnts.txt2",
                icon: (
                    <BrushIcon
                        sx={{ width: size, height: size, color: color }}
                    />
                ),
            },
            {
                text: "levelsPage.sections.section3.listElemnts.txt3",
                icon: (
                    <BrushIcon
                        sx={{ width: size, height: size, color: color }}
                    />
                ),
            },
            {
                text: "levelsPage.sections.section3.listElemnts.txt4",
                icon: (
                    <BrushIcon
                        sx={{ width: size, height: size, color: color }}
                    />
                ),
            },
            {
                text: "levelsPage.sections.section3.listElemnts.txt5",
                icon: (
                    <BrushIcon
                        sx={{ width: size, height: size, color: color }}
                    />
                ),
            },
            {
                text: "levelsPage.sections.section3.listElemnts.txt6",
                icon: (
                    <BrushIcon
                        sx={{ width: size, height: size, color: color }}
                    />
                ),
            },
        ],
    },
    {
        title: "levelsPage.sections.section4.title",
        subTitle: "levelsPage.sections.section4.subTitle",
        image: "",

        bgColor: theme.palette.basic.main,
        titleColor: theme.palette.blue.dark,
        subTitleColor: theme.palette.basic.dark,
        iconsColor: theme.palette.blue.dark,

        listElemnts: (size: string, color: string) => [
            {
                text: "levelsPage.sections.section4.listElemnts.txt1",
                icon: (
                    <BrushIcon
                        sx={{ width: size, height: size, color: color }}
                    />
                ),
            },
            {
                text: "levelsPage.sections.section4.listElemnts.txt2",
                icon: (
                    <BrushIcon
                        sx={{ width: size, height: size, color: color }}
                    />
                ),
            },
            {
                text: "levelsPage.sections.section4.listElemnts.txt3",
                icon: (
                    <BrushIcon
                        sx={{ width: size, height: size, color: color }}
                    />
                ),
            },
            {
                text: "levelsPage.sections.section4.listElemnts.txt4",
                icon: (
                    <BrushIcon
                        sx={{ width: size, height: size, color: color }}
                    />
                ),
            },
            {
                text: "levelsPage.sections.section4.listElemnts.txt5",
                icon: (
                    <BrushIcon
                        sx={{ width: size, height: size, color: color }}
                    />
                ),
            },
            {
                text: "levelsPage.sections.section4.listElemnts.txt6",
                icon: (
                    <BrushIcon
                        sx={{ width: size, height: size, color: color }}
                    />
                ),
            },
        ],
    },
];
