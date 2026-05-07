import Column from "@/components/common/Column";
import Row from "@/components/common/Row";
import Square from "@/components/common/Square";
import Text from "@/components/common/Text";
import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Avatar, Box, Button, Grid, Stack } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const Widgets = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const links = [
    { href: "/", data: t("Layout.Header.Home") },
    { href: "/about", data: t("Layout.Header.About") },
    { href: "/academics", data: t("Layout.Header.Academics") },
    { href: "/engage", data: t("Layout.Header.Engage") },
    { href: "/news", data: t("Layout.Header.News") },
    { href: "/contact", data: t("Layout.Header.Contact") },
  ];

  const socialMediaLinks = [
    { icon: <FacebookIcon />, link: "https://www.facebook.com/ArabicInternationalSchoolAmman" },
    { icon: <InstagramIcon />, link: "https://www.instagram.com/aisamman/" },
    { icon: <YouTubeIcon />, link: "https://www.youtube.com/channel/UCcWDhM5HG1zk2m_EvXzr1Kg" },
  ];

  const contactInfo = [
    { data: t("Layout.Widgets.Address"), icon: <FmdGoodIcon />, href: "https://goo.gl/maps/hgTQf8j4N9SfZ1Tc6" },
    { data: t("Layout.Widgets.Phone"), icon: <LocalPhoneIcon />, href: "tel:+96264645411" },
    { data: t("Layout.Widgets.Email"), icon: <EmailIcon />, href: "mailto:Info@aisamman.com" },
  ];

  return (
    <Box sx={{ py: 4, px: { xs: 2, md: 4 }, backgroundColor: theme.palette.blue.dark }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <Stack height="100%" px={{ xs: 2, md: 1 }} py={{ xs: 1, md: 1 }}>
            <Square bgcolor={theme.palette.blue.dark} radius={{ mobile: ["3vw", "1.1.1.1"], desktop: ["1.2vw", "1.1.1.1"] }} sx={{ p: "1rem", border: `1px solid ${theme.palette.orange.main}` }}>
              <Row>
                {links.map(({ data, href }, i) => (
                  <Column xs={6} key={i} p={1}>
                    <Link href={href} locale={router.locale} style={{ color: theme.palette.basic.light, textDecoration: "none" }}>
                      <Text color={theme.palette.basic.light} center>{data}</Text>
                    </Link>
                  </Column>
                ))}
              </Row>
            </Square>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6} lg={5}>
          <Stack height="100%" px={{ xs: 2, md: 1 }} py={{ xs: 1, md: 1 }}>
            <Square bgcolor={theme.palette.blue.dark} radius={{ mobile: ["3vw", "1.1.1.1"], desktop: ["1.2vw", "1.1.1.1"] }} sx={{ p: "1rem", border: `1px solid ${theme.palette.orange.main}` }}>
              <Grid container>
                {contactInfo.map(({ data, icon, href }, i) => (
                  <Grid item xs={12} key={i}>
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} style={{ color: theme.palette.basic.light, textDecoration: "none", display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.5rem 0" }}>
                      {icon}
                      <Text color={theme.palette.basic.light}>{data}</Text>
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Square>
          </Stack>
        </Grid>

        <Grid item xs={12} md={12} lg={3}>
          <Stack justifyContent="center" height="100%" px={{ xs: 2, md: 1 }} py={{ xs: 1, md: 1 }}>
            <Square bgcolor={theme.palette.blue.dark} radius={{ mobile: ["3vw", "1.1.1.1"], desktop: ["1.2vw", "0.1.1.1"] }} sx={{ p: "1rem", border: `1px solid ${theme.palette.orange.main}` }}>
              <Row>
                <Column>
                  <Avatar sx={{ height: "auto", width: { xs: "15vw", sm: "12vw", md: "9vw", lg: "8vw" }, maxWidth: "120px", margin: "0 auto" }} variant="square" src="/images/AIS-Light-Blue-En-Logo.png" alt="logo 2" />
                </Column>
                {socialMediaLinks.map(({ icon, link }, i) => (
                  <Column xs={4} sm={2} key={i}>
                    <Button href={link} target="_blank" variant="text" sx={{ padding: 0 }} fullWidth>
                      <Text color={theme.palette.basic.light} variant="sm" center>{icon}</Text>
                    </Button>
                  </Column>
                ))}
              </Row>
            </Square>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Widgets;
