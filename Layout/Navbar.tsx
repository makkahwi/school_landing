import { MainLogo, NavStackStyles } from "@/Layout/styles";
import { navbarPage } from "@/utils/constants";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Stack } from "@mui/system";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import React from "react";

import NavItem from "./NavbarItem";

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

      case "/engage":
        setBackground(theme.palette.orange.main);
        setColor(theme.palette.basic.light);
        break;

      case "/about":
        setBackground(theme.palette.orange.main);
        setColor(theme.palette.basic.light);
        break;

      case "/community":
        setBackground(theme.palette.blue.dark);
        setColor(theme.palette.basic.light);
        break;

      case "/contact":
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

      {navbarPage.navbarItems({ color: color, size: "100%" }).map((item, i) => (
        <React.Fragment key={i}>{NavItem({ ...item, color })}</React.Fragment>
      ))}

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
