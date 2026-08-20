import theme from "@/styles/theme";
import { Box, Container, Typography } from "@mui/material";

const PageHeader = ({ bg = theme.palette.primary.main, title = "" }) => {
  const isLight =
    bg === theme.palette.basic.light ||
    bg === theme.palette.basic.main ||
    bg === theme.palette.background.default;
  const titleColor = isLight ? theme.palette.primary.dark : theme.palette.basic.light;
  const accentColor = isLight ? theme.palette.orange.main : theme.palette.secondary.main;

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: bg,
        color: titleColor,
        borderBottom: "1px solid",
        borderColor: isLight ? "divider" : "rgba(255,255,255,.14)",
        "&:before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: isLight
            ? "linear-gradient(135deg, rgba(11,53,88,.08), rgba(216,175,82,.16))"
            : "linear-gradient(135deg, rgba(255,255,255,.08), rgba(216,175,82,.16))",
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative", py: { xs: 6, md: 9 } }}>
        <Box
          sx={{
            width: 72,
            height: 5,
            bgcolor: accentColor,
            mb: 2.5,
          }}
        />
        <Typography
          component="h1"
          sx={{
            maxWidth: 980,
            fontSize: { xs: "36px", md: "58px" },
            lineHeight: 1.05,
            fontWeight: 900,
            letterSpacing: 0,
          }}
        >
          {title}
        </Typography>
      </Container>
    </Box>
  );
};

export default PageHeader;
