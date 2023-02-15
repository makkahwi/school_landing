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
    NavItemHoverEffect,
} from "@/components/layout/styles";
import { Container, Stack } from "@mui/system";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";

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

            case "/levels":
                setBackground(theme.palette.orange.main);
                setColor(theme.palette.basic.light);
                break;

            case "/about":
                setBackground(theme.palette.orange.main);
                setColor(theme.palette.basic.light);
                break;

            case "/registration":
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
                break;
        }

        setNavIsOpened(isDesktop);
    }, [router.pathname, setNavIsOpened, setBackground, setColor]);

    const LinkElement = ({
        data,
        icon,
        href = router.asPath,
        itemLocale = locale,
        onClick,
    }: LinkElementProps) => {
        return onClick ? (
            <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sx={{ width: "auto" }}
            >
                <HeaderButton
                    disableGutters={true}
                    sx={{ padding: { xs: 1, md: 2 } }}
                    onClick={onClick}
                >
                    {icon}
                </HeaderButton>
                <Container
                    disableGutters={true}
                    sx={{
                        padding: { xs: 0, md: 2 },
                        minHeight: "100%",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    {data}
                </Container>
            </Stack>
        ) : (
            <Link href={href} locale={itemLocale} style={NavLinkStyles}>
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    sx={{
                        width: "auto",
                        transition: "0.2s ease",
                        ...NavItemHoverEffect,
                    }}
                >
                    <HeaderButton
                        disableGutters={true}
                        sx={{ padding: { xs: 2.3, md: 2 } }}
                    >
                        {icon}
                    </HeaderButton>

                    <Container
                        disableGutters={true}
                        sx={{ padding: { xs: 2, md: 1 } }}
                    >
                        <Typography variant="h5" color={color}>
                            {data}
                        </Typography>
                    </Container>
                </Stack>
            </Link>
        );
    };

    return (
        <Stack sx={NavStackStyles}>
            {[
                {
                    data: (
                        <MainLogo
                            src="/header/header-logo.png"
                            alt="header logo"
                            variant="square"
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
                },
                ...navbarPage.navbarItems({ color: color, size: "100%" }),
                {
                    data: locale == "en" ? "English" : "Arabic",
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
                },
            ].map((item, index) => {
                return (
                    <React.Fragment key={`Link Element number: ${index}`}>
                        {LinkElement({ ...item })}
                    </React.Fragment>
                );
            })}
        </Stack>
    );
};

export default Navbar;
