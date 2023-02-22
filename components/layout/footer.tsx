import { FooterContainer } from "@/components/layout/styles";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";

/**
 * the footer section in the layout
 *
 */
const Footer = () => {
    const router = useRouter();
    const { t } = useTranslation(router);

    return (
        <FooterContainer>
            <Container sx={{padding: 2}}>
                <Typography textAlign="center" fontSize={{xs: "4vw", md: "1vw"}}>
                    {t("footer.copyRights")}
                </Typography>
            </Container>
        </FooterContainer>
    );
};

export default Footer;
