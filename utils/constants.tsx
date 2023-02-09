import { AiFillHome } from "react-icons/ai";
import { RiLayoutMasonryFill, RiFileSearchFill } from "react-icons/ri";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";
import { FaUnlockAlt } from "react-icons/fa";
import { IoIosBook, IoIosBrush } from "react-icons/io";
import { TbLanguage } from "react-icons/tb";
import { MdFastfood } from "react-icons/md";
import { CgMathDivide } from "react-icons/cg";
import { FaChess, FaLanguage, FaSchool } from "react-icons/fa";
import { BiJoystick, BiBasketball, BiPaperPlane } from "react-icons/bi";

/**
 *  landing page constants
 */
export const landingPage = {
    welcomeIntro:
        "Al-Aqsa Integrated School Malaysia (AIS) is an international school founded in Kuala Lumpur, Malaysia and launched its first semester on October 2018.The main purpose of founding AIS was to offer education to families around Klang Valley a satisfying education level and good environment MORE…",
    whyAIS_icons: [
        {
            src: "/landingPage/islamic-icon.jpg",
            alt: "islamic-icon",
            width: "60%",
            height: "60%",
            text: "High-Level Islamic & Arabic Education",
        },
        {
            src: "/landingPage/cambridge-icon.jpg",
            alt: "cambridge-icon",
            width: "60%",
            height: "60%",
            text: "Cambridge Sciences' Curriculum",
        },
        {
            src: "/landingPage/cheap-zone-icon.jpg",
            alt: "cheap-zone-icon",
            width: "60%",
            height: "60%",
            text: "Reasonable & Affordable Charges",
        },
    ],
    newsFeatures: [
        "Job oppurtnity",
        "Student Portal",
        "Student Portal",
        "Registration Fee",
        "Staff Protal",
        "Staff Protal",
        "AIS Curriculum",
        "Website privacy",
        "Website privacy",
        "Levels of Study",
        "Data protection",
        "Data protection",
        "Levels of Study",
        "Data protection",
        "Data protection",
    ],
};

/**
 *  navbar constants
 */
export const navbarPage = {
    navbarItems: (color: string, size: string) => {
        return [
            {
                text: "Home",
                href: "/",
                icon: <AiFillHome color={color} size={size} />,
            },
            {
                text: "AIS Academic",
                href: "/curriculum",
                icon: <RiLayoutMasonryFill color={color} size={size} />,
            },
            {
                text: "Engage with AIS",
                href: "/levels",
                icon: <RiFileSearchFill color={color} size={size} />,
            },
            {
                text: "About AIS",
                href: "/about",
                icon: (
                    <BsFillExclamationCircleFill
                        color={color}
                        size={size}
                    />
                ),
            },
            {
                text: "Contact AIS",
                href: "/latest",
                icon: <MdContactPhone color={color} size={size} />,
            },
            {
                text: "Unlock",
                href: "/registration",
                icon: <FaUnlockAlt color={color} size={size} />,
            },
            {
                text: "Jobs",
                href: "/jobs",
                icon: <BiPaperPlane color={color} size={size} />,
            }
        ];
    },
};

/**
 *  curreculum page constants
 */
export const curriculumPage = {
    contentSquares: [
        {
            text: "Languages",
            edges: {
                borderRadius: "3vw",
                topLeft: true,
                topRight: false,
                bottomRight: true,
                bottomLeft: true,
            },
        },
        {
            text: "Islamic",
            edges: {
                borderRadius: "3vw",
                topLeft: false,
                topRight: false,
                bottomRight: true,
                bottomLeft: true,
            },
        },
        {
            text: "Modern",
            edges: {
                borderRadius: "3vw",
                topLeft: false,
                topRight: true,
                bottomRight: true,
                bottomLeft: true,
            },
        },
    ],

    languagesPage: [
        {
            title: "Arabic",
            content:
                "Arabic as the mother tongue of Arab students which should not be lost, and basic Islamic knowledge language for Muslims",
        },
        {
            title: "English",
            content:
                "English as the modern sciences language, which enables students to keep update with the latest discoveries, theories and inventions",
        },
        {
            title: "Malay",
            content:
                "The local language of Malays, which enhance students’ capability to interact with the locals of Malaysia",
        },
    ],

    islamicStudies:
        "The religious part of the curriculum is divided into three sections: Islamic Fiqh, Quran Memorization & Recitation, and Islamic Culture Education . As for the Islamic Fiqh, AIS depends on the heritage of Imam Shafi’I, and it is keen to teach the Quran and the rules of recitation and memorizing it. In the aspect of Islamic education, the curriculum contains all that develop good Islamic values and manners among students. Curriculum units vary to include Hadith, Prophetic Hadith, Sunnah, and others.",

    modernSciences:
        "Math, Science, Computer Science, Arts and Sports , These basic materials aim to provide students with basic computers skills, math and the sciences (Chemistry, Physics and Biology), and trying to develop different skills in art and sports and to discover and develop talents. Math, science and English language courses follow the Cambridge curriculum.",

    clubsItems: (size: string, color: string) => [
        { text: "Art Club", icon: <IoIosBrush size={size} color={color} /> },
        { text: "Arabic Club", icon: <IoIosBook size={size} color={color} /> },
        { text: "French Club", icon: <TbLanguage size={size} color={color} /> },
        {
            text: "Cooking Club",
            icon: <MdFastfood size={size} color={color} />,
        },
        { text: "Math Club", icon: <CgMathDivide size={size} color={color} /> },
        { text: "Chess Club", icon: <FaChess size={size} color={color} /> },
    ],

    activitiesItems: (size: string, color: string) => [
        {
            text: "Leisure Trips",
            icon: <BiJoystick size={size} color={color} />,
        },
        { text: "Library Day", icon: <IoIosBook size={size} color={color} /> },
        {
            text: "Sports Day",
            icon: <BiBasketball size={size} color={color} />,
        },
        {
            text: "Cultural Competitions",
            icon: <FaLanguage size={size} color={color} />,
        },
        {
            text: "Math Competitions",
            icon: <CgMathDivide size={size} color={color} />,
        },
        {
            text: "Educational Trips",
            icon: <FaSchool size={size} color={color} />,
        },
    ],
};
