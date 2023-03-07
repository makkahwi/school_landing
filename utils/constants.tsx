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
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import ConstructionIcon from "@mui/icons-material/Construction";
import MosqueIcon from "@mui/icons-material/Mosque";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import PublicIcon from "@mui/icons-material/Public";
import BalanceIcon from "@mui/icons-material/Balance";
import ScienceIcon from "@mui/icons-material/Science";
import AppleIcon from "@mui/icons-material/Apple";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

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
                href: "/unlock",
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

    levelsPageSections: [
        {
            title: "curriculumPage.levels.sections.section1.title",
            subTitle: "curriculumPage.levels.sections.section1.subTitle",
            image: "",

            bgColor: theme.palette.basic.main,
            titleColor: theme.palette.orange.main,
            subTitleColor: theme.palette.basic.dark,
            iconsColor: theme.palette.orange.main,

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
                        <GTranslateIcon
                            sx={{ width: size, height: size, color: color }}
                        />
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
                        <CalculateIcon
                            sx={{ width: size, height: size, color: color }}
                        />
                    ),
                },
            ],
        },
        {
            title: "curriculumPage.levels.sections.section2.title",
            subTitle: "curriculumPage.levels.sections.section2.subTitle",
            image: "",

            bgColor: theme.palette.blue.dark,
            titleColor: theme.palette.orange.main,
            subTitleColor: theme.palette.basic.light,
            iconsColor: theme.palette.orange.main,

            listElemnts: (size: string, color: string) => [
                {
                    text: "curriculumPage.levels.sections.section2.listElemnts.txt1",
                    icon: (
                        <BrushIcon
                            sx={{ width: size, height: size, color: color }}
                        />
                    ),
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
                        <GTranslateIcon
                            sx={{ width: size, height: size, color: color }}
                        />
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
                        <CalculateIcon
                            sx={{ width: size, height: size, color: color }}
                        />
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
                    icon: (
                        <MosqueIcon
                            sx={{ width: size, height: size, color: color }}
                        />
                    ),
                },
                {
                    text: "curriculumPage.levels.sections.section2.listElemnts.txt8",
                    icon: (
                        <Brightness3Icon
                            sx={{ width: size, height: size, color: color }}
                        />
                    ),
                },
            ],
        },
        {
            title: "curriculumPage.levels.sections.section3.title",
            subTitle: "curriculumPage.levels.sections.section3.subTitle",
            image: "",

            bgColor: theme.palette.orange.main,
            titleColor: theme.palette.basic.light,
            subTitleColor: theme.palette.basic.dark,
            iconsColor: theme.palette.basic.light,

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
                        <GTranslateIcon
                            sx={{ width: size, height: size, color: color }}
                        />
                    ),
                },
                {
                    text: "curriculumPage.levels.sections.section3.listElemnts.txt4",
                    icon: (
                        <PublicIcon
                            sx={{ width: size, height: size, color: color }}
                        />
                    ),
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
                        <CalculateIcon
                            sx={{ width: size, height: size, color: color }}
                        />
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
                    icon: (
                        <BrushIcon
                            sx={{ width: size, height: size, color: color }}
                        />
                    ),
                },
                {
                    text: "curriculumPage.levels.sections.section3.listElemnts.txt9",
                    icon: (
                        <BalanceIcon
                            sx={{ width: size, height: size, color: color }}
                        />
                    ),
                },
                {
                    text: "curriculumPage.levels.sections.section3.listElemnts.txt10",
                    icon: (
                        <Brightness3Icon
                            sx={{ width: size, height: size, color: color }}
                        />
                    ),
                },
                {
                    text: "curriculumPage.levels.sections.section3.listElemnts.txt11",
                    icon: (
                        <MosqueIcon
                            sx={{ width: size, height: size, color: color }}
                        />
                    ),
                },
                {
                    text: "curriculumPage.levels.sections.section3.listElemnts.txt12",
                    icon: (
                        <Brightness3Icon
                            sx={{ width: size, height: size, color: color }}
                        />
                    ),
                },
            ],
        },
        {
            title: "curriculumPage.levels.sections.section4.title",
            subTitle: "curriculumPage.levels.sections.section4.subTitle",
            image: "",

            bgColor: theme.palette.basic.main,
            titleColor: theme.palette.blue.dark,
            subTitleColor: theme.palette.basic.dark,
            iconsColor: theme.palette.blue.dark,

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
                        <GTranslateIcon
                            sx={{ width: size, height: size, color: color }}
                        />
                    ),
                },
                {
                    text: "curriculumPage.levels.sections.section3.listElemnts.txt4",
                    icon: (
                        <PublicIcon
                            sx={{ width: size, height: size, color: color }}
                        />
                    ),
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
                        <CalculateIcon
                            sx={{ width: size, height: size, color: color }}
                        />
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
                    icon: (
                        <BrushIcon
                            sx={{ width: size, height: size, color: color }}
                        />
                    ),
                },
                {
                    text: "curriculumPage.levels.sections.section4.listElemnts.txt9",
                    icon: (
                        <ScienceIcon
                            sx={{ width: size, height: size, color: color }}
                        />
                    ),
                },
                {
                    text: "curriculumPage.levels.sections.section4.listElemnts.txt10",
                    icon: (
                        <AppleIcon
                            sx={{ width: size, height: size, color: color }}
                        />
                    ),
                },
                {
                    text: "curriculumPage.levels.sections.section4.listElemnts.txt11",
                    icon: (
                        <FingerprintIcon
                            sx={{ width: size, height: size, color: color }}
                        />
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
                        <BalanceIcon
                            sx={{ width: size, height: size, color: color }}
                        />
                    ),
                },
                {
                    text: "curriculumPage.levels.sections.section4.listElemnts.txt14",
                    icon: (
                        <Brightness3Icon
                            sx={{ width: size, height: size, color: color }}
                        />
                    ),
                },
                {
                    text: "curriculumPage.levels.sections.section4.listElemnts.txt15",
                    icon: (
                        <MosqueIcon
                            sx={{ width: size, height: size, color: color }}
                        />
                    ),
                },
                {
                    text: "curriculumPage.levels.sections.section4.listElemnts.txt16",
                    icon: (
                        <Brightness3Icon
                            sx={{ width: size, height: size, color: color }}
                        />
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
    requirementsSection: [
        {
            title: "registrationPage.details.requires.title",
            lists: [
                {
                    title: "registrationPage.details.requires.lists.item1.title",
                    items: [
                        "registrationPage.details.requires.lists.item1.items.item1",
                        "registrationPage.details.requires.lists.item1.items.item2",
                        "registrationPage.details.requires.lists.item1.items.item3",
                        "registrationPage.details.requires.lists.item1.items.item4",
                    ],
                    trigger: "1",
                },
                {
                    title: "registrationPage.details.requires.lists.item2.title",
                    items: [
                        "registrationPage.details.requires.lists.item2.items.item1",
                    ],
                    trigger: "2",
                },
                {
                    title: "registrationPage.details.requires.lists.item3.title",
                    items: [
                        "registrationPage.details.requires.lists.item3.items.item1",
                        "registrationPage.details.requires.lists.item3.items.item2",
                    ],
                    trigger: "3",
                },
                {
                    title: "registrationPage.details.requires.lists.item4.title",
                    items: [
                        "registrationPage.details.requires.lists.item4.items.item1",
                        "registrationPage.details.requires.lists.item4.items.item2",
                    ],
                    trigger: "4",
                },
            ],
        },
        {
            title: "registrationPage.details.deadlines.title",
            lists: [
                {
                    title: "registrationPage.details.deadlines.lists.item1.title",
                    items: [
                        "registrationPage.details.deadlines.lists.item1.items.item1",
                    ],
                    trigger: "5",
                },
                {
                    title: "registrationPage.details.deadlines.lists.item2.title",
                    items: [
                        "registrationPage.details.deadlines.lists.item2.items.item1",
                    ],
                    trigger: "6",
                },
                {
                    title: "registrationPage.details.deadlines.lists.item3.title",
                    items: [
                        "registrationPage.details.deadlines.lists.item3.items.item1",
                    ],
                    trigger: "7",
                },
            ],
        },
    ],

    structureSection: [
        {
            title: "registrationPage.structure.item1.title",
            items: Array(4)
                .fill(1)
                .map((_, i) => i + 1)
                .map((index) => {
                    return {
                        title: `registrationPage.structure.item1.item${index}.title`,
                        price: `registrationPage.structure.item1.item${index}.price`,
                        description: `registrationPage.structure.item1.item${index}.description`,
                    };
                }),
        },
        {
            title: "registrationPage.structure.item2.title",
            items: Array(3)
                .fill(1)
                .map((_, i) => i + 1)
                .map((index) => {
                    return {
                        title: `registrationPage.structure.item2.item${index}.title`,
                        price: `registrationPage.structure.item2.item${index}.price`,
                        description: `registrationPage.structure.item2.item${index}.description`,
                    };
                }),
        },
        {
            title: "registrationPage.structure.item3.title",
            items: [
                {
                    title: "registrationPage.structure.item3.item1.title",
                    price: "registrationPage.structure.item3.item1.price",
                    description:
                        "registrationPage.structure.item3.item1.description",
                },
            ],
        },
        {
            title: "registrationPage.structure.item4.title",
            items: Array(12)
                .fill(1)
                .map((_, i) => i + 1)
                .map((index) => {
                    return {
                        title: `registrationPage.structure.item4.item${index}.title`,
                        price: `registrationPage.structure.item4.item${index}.price`,
                        description: `registrationPage.structure.item4.item${index}.description`,
                    };
                }),
        },
    ],

    discountSection: [
        {
            title: "registrationPage.discounts.item1.title",
            items: [
                {
                    title: "registrationPage.discounts.item1.item1.title",
                    price: "registrationPage.discounts.item1.item1.price",
                    description:
                        "registrationPage.discounts.item1.item1.description",
                },
            ],
        },
        {
            title: "registrationPage.discounts.item2.title",
            items: Array(3)
                .fill(1)
                .map((_, i) => i + 1)
                .map((index) => {
                    return {
                        title: `registrationPage.discounts.item2.item${index}.title`,
                        price: `registrationPage.discounts.item2.item${index}.price`,
                        description: `registrationPage.discounts.item2.item${index}.description`,
                    };
                }),
        },
        {
            title: "registrationPage.discounts.item3.title",
            items: [
                {
                    title: "registrationPage.discounts.item3.item1.title",
                    price: "registrationPage.discounts.item3.item1.price",
                    description:
                        "registrationPage.discounts.item3.item1.description",
                },
            ],
        },
    ],
};
