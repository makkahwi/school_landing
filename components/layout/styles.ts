import { Box, Container, Stack, AppBar, SvgIconTypeMap } from "@mui/material";
import { keyframes, styled } from "@mui/material/styles";
import CSS from "csstype";
import Avatar from "@mui/material/Avatar";
import { ElementType, ReactNode } from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";

// Interfaces ------------------------------------------

export interface LinkElementProps {
    data: string | JSX.Element;
    icon: ReactNode;
    href?: string;
    itemLocale?: string;
    onClick?(): void;
}

// Layout components ------------------------------------------

export const LayoutBox = styled(Stack)(({ theme }) => ({
    width: "100%",
    background: theme.palette.blue.main,
}));

// Main components ------------------------------------------

export const MainContainer = styled("main")(() => ({
    overflow: "scroll",
    overflowX: "hidden",
    height: "100vh",
    width: "100%",
}));

// Header components ------------------------------------------

export const HeaderAnimation = {
    HeaderOpenningDesktop: keyframes`
        0% {width: 5.5rem;}
        100% {width: max(15%, 18rem);}
    `,
    HeaderClosingDesktop: keyframes`
        0% {width: max(15%, 18rem);}
        100% {width: 5.5rem;}
    `,
    HeaderOpenningMobile: keyframes`
        0% {height: 5rem;}
        100% {height: 30rem;}
    `,
    HeaderClosingMobile: keyframes`
        0% {height: 30rem;}
        100% {height: 5rem;}
    `,
};

export const HeaderButton = styled(Container)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "4rem",
    height: "4rem",
    cursor: "pointer",
    minWidth: "4rem",
    minHeight: "4rem",
}));

// Navbar components ------------------------------------------

export const NavLinkStyles: CSS.Properties = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    textDecoration: "none",
    width: "100%",
    overflow: "hidden",
    whiteSpace: "nowrap",
};

export const NavStackStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    background: "transparent",
    width: "100%",
    height: "100%",
};

export const MainLogo = styled(Avatar)(() => ({
    maxHeight: "2rem",
    width: "100%",
    overflow: "hidden",
}));

export const NavItemHoverEffect = {
    "&:hover": {
        opacity: 0.7,
        transform: "translate(5%)"
    },
};
