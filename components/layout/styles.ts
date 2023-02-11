import { Box, Container, Stack, AppBar } from "@mui/material";
import { keyframes, styled } from "@mui/material/styles";
import CSS from "csstype";
import Avatar from "@mui/material/Avatar";

// Interfaces ------------------------------------------

export interface LinkElementProps {
    data: string | JSX.Element;
    icon: JSX.Element;
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
        0% {width: 4rem;}
        100% {width: max(15%, 20rem);}
    `,
    HeaderClosingDesktop: keyframes`
        0% {width: max(15%, 20rem);}
        100% {width: 4rem;}
    `,
    HeaderOpenningMobile: keyframes`
        0% {height: 3rem;}
        100% {height: 50vh;}
    `,
    HeaderClosingMobile: keyframes`
        0% {height: 50vh;}
        100% {height: 3rem;}
    `,
};

export const HeaderButton = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "2rem",
    height: "2rem",
    cursor: "pointer",
    minWidth: "2rem",
    minHeight: "2rem",
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
