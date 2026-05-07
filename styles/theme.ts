import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#1C4B94" },
    blue: {
      main: "#f4f7fc",
      light: "#1C4B94",
      dark: "#1C4B94",
    },
    basic: {
      main: "#d9dee8",
      light: "#ffffff",
      dark: "#1f2428",
    },
    orange: { main: "#C7A24A" },
    brown: { main: "#1C4B94" },
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: '"Trebuchet MS", "Verdana", sans-serif',
    h3: { fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.01em" },
    h4: { fontWeight: 700, lineHeight: 1.25 },
    h5: { fontWeight: 700, lineHeight: 1.3 },
    h6: { lineHeight: 1.7, fontWeight: 500 },
  },
});

export default theme;
