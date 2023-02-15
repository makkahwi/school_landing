import { keyframes, styled } from "@mui/material/styles";
import CSS from "csstype";
import Avatar from "@mui/material/Avatar";
import { ReactNode } from "react";
import { Container, Stack, Box } from "@mui/material";
import theme from "@/styles/theme";

// Welcome Section ------------------------------------------

export const WelcomeSectionBox = styled(Box)(() => ({
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://aqsa.edu.my/wp-content/uploads/2019/05/Why.jpg")`,
    backgroundSize: "cover",
}));

export const SquaresShape = styled(Container)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));

export const GridLayoutStyles = {
    display: "grid",
    gridTemplateColumns: {
        xs: "repeat(20, 1.5vw)",
        md: "repeat(20, 0.5vw)",
    },
    gridTemplateRows: {
        xs: "repeat(18, 1.5vw)",
        md: "repeat(18, 0.5vw)",
    },
    gap: { xs: 1, md: 2 },
}

// Why AIS Section ------------------------------------------

export const WhyAISSectionBox = styled(Box)(() => ({
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://aqsa.edu.my/wp-content/uploads/2019/05/Why.jpg")`,
    backgroundSize: "cover",
}));
