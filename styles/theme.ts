import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#0B3558", dark: "#071D34", light: "#1D5C8C" },
    secondary: { main: "#D8AF52", dark: "#B98D2E", light: "#F0D58E" },
    background: { default: "#FAF7F1", paper: "#FFFFFF" },
    text: { primary: "#102033", secondary: "#586677" },
    blue: {
      main: "#FAF7F1",
      light: "#1D5C8C",
      dark: "#071D34",
    },
    basic: {
      main: "#E6EDF3",
      light: "#ffffff",
      dark: "#102033",
    },
    orange: { main: "#9B681B" },
    brown: { main: "#0B3558" },
    divider: "rgba(11, 53, 88, 0.14)",
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily:
      '"Inter", "Noto Sans", "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    h2: {
      fontWeight: 800,
      lineHeight: 1.08,
      letterSpacing: 0,
      fontSize: "clamp(2.25rem, 4.2vw, 4.5rem)",
    },
    h3: { fontWeight: 800, lineHeight: 1.16, letterSpacing: 0 },
    h4: { fontWeight: 760, lineHeight: 1.25, letterSpacing: 0 },
    h5: { fontWeight: 760, lineHeight: 1.3, letterSpacing: 0 },
    h6: { lineHeight: 1.55, fontWeight: 600, letterSpacing: 0 },
    button: { fontWeight: 800, letterSpacing: 0, textTransform: "none" },
    overline: { letterSpacing: ".08em" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 6, boxShadow: "none" },
        containedPrimary: {
          backgroundColor: "#D8AF52",
          color: "#071D34",
          "&:hover": { backgroundColor: "#C99E3E", boxShadow: "none" },
        },
        outlinedPrimary: {
          borderColor: "#0B3558",
          color: "#0B3558",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 6, fontWeight: 700 },
      },
    },
  },
});

export default theme;
