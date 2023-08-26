import { FooterContainer } from "@/components/layout/styles";
import useTranslation from "@/hooks/useTranslation";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <FooterContainer>
      <Container sx={{ padding: 2 }}>
        <Typography textAlign="center" fontSize={{ xs: "4vw", md: "1vw" }}>
          {t("footer.copyRights") + new Date().getFullYear()}
          {" | "}
          {t("footer.by")}{" "}
          <a
            href="https://www.semesteer.com/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit" }}
          >
            {t("footer.developer")}
          </a>
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
