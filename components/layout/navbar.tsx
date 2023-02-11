/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { AiOutlineGlobal } from "react-icons/ai";
import { navbarPage } from "@/utils/constants";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import React from "react";
import { v4 as uuidv4 } from "uuid";
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
import { HiBars3 } from "react-icons/hi2";
import { useTheme } from "@mui/material/styles";

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
    const [iconTransform, setIconTransform] = useState("none");
    const [color, setColor] = useState("transparent");
    const router = useRouter();
    const { locale } = router;
    const theme = useTheme();

    useEffect(() => {
        setIconTransform(navIsOpened ? "rotate(-90deg)" : "none");
    }, [navIsOpened]);

    useEffect(() => {
        setNavIsOpened(false);
    }, [locale]);

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

        setNavIsOpened(false);
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
                <HeaderButton onClick={onClick}>{icon}</HeaderButton>
                <Container>{data}</Container>
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
                    <HeaderButton>{icon}</HeaderButton>

                    <Container>
                        <Typography variant="h5" color={color}>
                            {data}
                        </Typography>
                    </Container>
                </Stack>
            </Link>
        );
    };

    const MainLogoElement = () => (
        <MainLogo
            src="/header/header-logo.jpg"
            alt="header logo"
            variant="square"
        />
    );

    return (
        <Stack sx={NavStackStyles}>
            {[
                {
                    data: <MainLogoElement />,
                    icon: (
                        <HiBars3
                            color={color}
                            size={"100%"}
                            style={{
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
                    icon: <AiOutlineGlobal color={color} size={"100%"} />,
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
