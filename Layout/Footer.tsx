import useTranslation from "@/hooks/useTranslation";
import { FooterContainer } from "@/Layout/styles";
import theme from "@/styles/theme";
import { Box, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <FooterContainer>
      <Container maxWidth="lg" sx={{ px: 2 }}>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Typography
            component="p"
            sx={{
              m: 0,
              width: "100%",
              textAlign: "center",
              fontSize: { xs: "12px", md: "14px" },
              color: theme.palette.basic.light,
            }}
          >
            {t("Layout.Footer.CopyRights") + new Date().getFullYear()}
            {" | "}
            {t("Layout.Footer.By")}{" "}
            <a
              href="https://www.semesteer.com/"
              target="_blank"
              rel="noreferrer"
              style={{ color: theme.palette.orange.main }}
            >
              {t("Layout.Footer.Developer")}
            </a>
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
