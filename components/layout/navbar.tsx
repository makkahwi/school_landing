/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { navbarPage } from "@/utils/constants";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import React from "react";
import {
    HeaderButton,
    NavLinkStyles,
    NavStackStyles,
    LinkElementProps,
    MainLogo,
} from "@/components/layout/styles";
import { Container, Stack, Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import useTranslation from "@/hooks/useTranslation";
import NavItem from "./navItem";

/**
 * the navbar section in the layout
 *
 */
const Navbar = ({
    navIsOpened,
    setNavIsOpened,
    setBackground,
}: {
    navIsOpened: boolean;
    setNavIsOpened: Dispatch<SetStateAction<boolean>>;
    setBackground: Dispatch<SetStateAction<string>>;
}) => {
    const isDesktop = useMediaQuery("(min-width:900px)");
    const theme = useTheme();
    const [iconTransform, setIconTransform] = useState("none");
    const [color, setColor] = useState(theme.palette.basic.light);
    const router = useRouter();
    const { locale } = router;
    const { t } = useTranslation(router);

    useEffect(() => {
        setIconTransform(
            isDesktop
                ? navIsOpened
                    ? "none"
                    : "rotate(-90deg)"
                : navIsOpened
                ? "rotate(-90deg)"
                : "none"
        );
    }, [navIsOpened, isDesktop]);

    useEffect(() => {
        switch (router.pathname) {
            case "/":
                setBackground(theme.palette.blue.dark);
                setColor(theme.palette.basic.light);
                break;

            case "/curriculum":
                setBackground(theme.palette.blue.main);
                setColor(theme.palette.blue.dark);
                break;

            case "/engage":
                setBackground(theme.palette.orange.main);
                setColor(theme.palette.basic.light);
                break;

            case "/about":
                setBackground(theme.palette.orange.main);
                setColor(theme.palette.basic.light);
                break;

            case "/unlock":
                setBackground(theme.palette.blue.dark);
                setColor(theme.palette.basic.light);
                break;

            case "/jobs":
                setBackground(theme.palette.blue.dark);
                setColor(theme.palette.basic.light);
                break;

            case "/latest":
                setBackground(theme.palette.blue.dark);
                setColor(theme.palette.basic.light);
                break;

            default:
                setBackground(theme.palette.basic.main);
                setColor(theme.palette.blue.dark);
                break;
        }

        handleButtonClick();
        setNavIsOpened(isDesktop);
    }, [router.pathname, setNavIsOpened, setBackground, setColor]);

    const handleButtonClick = () => {
        const topContainer = document.getElementById("top-container");

        if (topContainer) {
            topContainer.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Stack
            sx={{
                ...NavStackStyles,
                alignItems: locale === "en" ? "flex-start" : "flex-end",
            }}
        >
            {NavItem({
                data: (
                    <MainLogo
                        src="/header/header-logo.png"
                        alt="header logo"
                        variant="square"
                        sx={{
                            width: { xs: "auto", md: "100%" },
                        }}
                    />
                ),
                icon: (
                    <MenuIcon
                        sx={{
                            width: "100%",
                            height: "100%",
                            color: color,
                            transform: iconTransform,
                            transition: "0.7s ease",
                        }}
                    />
                ),
                href: router.asPath,
                onClick: () => {
                    setNavIsOpened((prev) => !prev);
                },
                color,
            })}

            {navbarPage
                .navbarItems({ color: color, size: "100%" })
                .map((item, index) => {
                    return (
                        <React.Fragment key={`Link Element number: ${index}`}>
                            {NavItem({ ...item, color })}
                        </React.Fragment>
                    );
                })}

            {NavItem({
                data:
                    locale == "en"
                        ? "navbar.navItems.languagAR"
                        : "navbar.navItems.languagEN",
                icon: (
                    <LanguageIcon
                        sx={{
                            width: "100%",
                            height: "100%",
                            color: color,
                        }}
                    />
                ),
                href: router.asPath,
                itemLocale: locale == "en" ? "ar" : "en",
                color,
            })}
        </Stack>
    );
};

export default Navbar;
