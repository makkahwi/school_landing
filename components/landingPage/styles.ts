import { keyframes, styled } from "@mui/material/styles";
import { Container, Stack, Box } from "@mui/material";
import theme from "@/styles/theme";

// Welcome Section ------------------------------------------

export const SquaresShape = styled(Container)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));

export const GridLayoutStyles = {
    direction: "ltr",
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
};

// News Section ------------------------------------------

export const NewsGridStyles = {
    direction: "ltr",
    display: "grid",
    justifyContent: "center",
    margin: 5,
    gridTemplateColumns: {
        xs: "repeat(37, 1vw)",
        md: "repeat(37, 0.5vw)",
    },
    gridTemplateRows: {
        xs: "repeat(20, 1vw)",
        md: "repeat(20, 0.5vw)",
    },
    gap: { xs: 0.7, md: 2 },
};

export const PageFlipComponent = styled(Box)(() => ({
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alighnItems: "center",
}));

export const LowerGridStyles = {
    direction: "ltr",
    margin: { xs: "4rem 0rem", md: 8 },
    display: "grid",
    justifyContent: "center",
    gridTemplateColumns: {
        xs: "repeat(12, 3vw)",
        md: "repeat(12, 2vw)",
    },
    gridTemplateRows: {
        xs: "repeat(11, 3vw)",
        md: "repeat(11, 2vw)",
    },
    gap: { xs: 2, md: 4 },
};

export const NewsArrowStyles = {
    position: "absolute",
    width: { xs: "15vw", md: "5vw" },
    height: { xs: "15vw", md: "5vw" },
    top: "50%",
    transition: "0.4s ease",
    transform: "translateY(-50%)",
    zIndex: "5",
    opacity: 0.3,
    color: theme.palette.basic.light,
    cursor: "pointer",

    "&:hover": {
        opacity: 1,
    },
};

export const NewsAnimation = keyframes`
    0% {opacity: 0;}
    100% {opacity: 1;}
`;
