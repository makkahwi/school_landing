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
    xs: "repeat(25, 2.2vw)",
    md: "repeat(25, 0.62vw)",
  },
  gridTemplateRows: {
    xs: "repeat(25, 2.2vw)",
    md: "repeat(25, 0.62vw)",
  },
  gap: { xs: 0.7, md: 1.7 },
};

export const NewsGridStyles = {
  direction: "ltr",
  display: "grid",
  justifyContent: "center",
  margin: { xs: 1.5, md: 4 },
  gridTemplateColumns: {
    xs: "repeat(37, 1.35vw)",
    md: "repeat(37, 0.7vw)",
  },
  gridTemplateRows: {
    xs: "repeat(20, 1.35vw)",
    md: "repeat(20, 0.7vw)",
  },
  gap: { xs: 0.45, md: 1.3 },
};

export const PageFlipComponent = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const NewsArrowStyles = {
  position: "absolute",
  width: { xs: "10vw", md: "3.2vw" },
  height: { xs: "10vw", md: "3.2vw" },
  top: "50%",
  transition: "0.3s ease",
  transform: "translateY(-50%)",
  zIndex: "5",
  opacity: 0.55,
  color: theme.palette.basic.light,
  cursor: "pointer",
  "&:hover": {
    opacity: 1,
  },
};

export const NewsAnimation = keyframes`
  0% {opacity: 0; transform: scale(0.98);} 
  100% {opacity: 1; transform: scale(1);} 
`;
