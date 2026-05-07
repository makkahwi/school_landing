import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#1892ce" },
    blue: {
      main: "#eff1f3",
      light: "#7cc1e3",
      dark: "#1892ce",
    },
    basic: {
      main: "#d3d3d3",
      light: "#ffffff",
      dark: "#1f2428",
    },
    orange: { main: "#fec817" },
    brown: { main: "#4e360c" },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: '"Trebuchet MS", "Verdana", sans-serif',
    h3: {
      fontWeight: 800,
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
    },
    h4: {
      fontWeight: 700,
      lineHeight: 1.25,
    },
    h5: {
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h6: {
      lineHeight: 1.7,
      fontWeight: 500,
    },
  },
});

export default theme;
