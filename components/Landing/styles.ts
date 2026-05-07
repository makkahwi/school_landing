import theme from "@/styles/theme";
import { Box, Container } from "@mui/material";
import { keyframes, styled } from "@mui/material/styles";

export const SquaresShape = styled(Container)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const GridLayoutStyles = {
  direction: "ltr",
  display: "grid",
  gridTemplateColumns: {
    xs: "repeat(25, 2vw)",
    md: "repeat(25, 0.56vw)",
  },
  gridTemplateRows: {
    xs: "repeat(25, 2vw)",
    md: "repeat(25, 0.56vw)",
  },
  gap: { xs: 0.7, md: 1.4 },
};

export const NewsGridStyles = {
  direction: "ltr",
  display: "grid",
  justifyContent: "center",
  margin: { xs: 1, md: 3 },
  gridTemplateColumns: {
    xs: "repeat(37, 1.2vw)",
    md: "repeat(37, 0.62vw)",
  },
  gridTemplateRows: {
    xs: "repeat(20, 1.2vw)",
    md: "repeat(20, 0.62vw)",
  },
  gap: { xs: 0.5, md: 1 },
};

export const PageFlipComponent = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const NewsArrowStyles = {
  position: "absolute",
  width: { xs: "9vw", md: "2.8vw" },
  height: { xs: "9vw", md: "2.8vw" },
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: "5",
  opacity: 0.72,
  color: theme.palette.basic.light,
  cursor: "pointer",
  "&:hover": { opacity: 1 },
};

export const NewsAnimation = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;
