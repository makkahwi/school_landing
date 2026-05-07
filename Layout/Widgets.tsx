import Column from "@/components/common/Column";
import Row from "@/components/common/Row";
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

  const contactInfo = [
    { data: t("Layout.Widgets.Address"), icon: <FmdGoodIcon />, href: "https://goo.gl/maps/hgTQf8j4N9SfZ1Tc6" },
    { data: t("Layout.Widgets.Phone"), icon: <LocalPhoneIcon />, href: "tel:+96264645411" },
    { data: t("Layout.Widgets.Email"), icon: <EmailIcon />, href: "mailto:Info@aisamman.com" },
  ];

  const socialMediaLinks = [
    { icon: <FacebookIcon />, link: "https://www.facebook.com/ArabicInternationalSchoolAmman" },
    { icon: <InstagramIcon />, link: "https://www.instagram.com/aisamman/" },
    { icon: <YouTubeIcon />, link: "https://www.youtube.com/channel/UCcWDhM5HG1zk2m_EvXzr1Kg" },
  ];

  return (
    <Box sx={{ backgroundColor: theme.palette.blue.dark, px: { xs: 2, md: 5 }, py: { xs: 4, md: 5 } }}>
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          border: `1px solid ${theme.palette.orange.main}`,
          borderRadius: "16px",
          p: { xs: 2, md: 3 },
        }}
      >
        <Grid container spacing={2.5} alignItems="stretch">
          <Grid item xs={12} lg={4}>
            <Stack spacing={1.2} sx={{ height: "100%", borderRight: { xs: "none", lg: `1px solid ${theme.palette.orange.main}` }, pr: { xs: 0, lg: 2 } }}>
              <Text color={theme.palette.orange.main} variant="cardTitle" bold>
                {t("Layout.Header.Home")}
              </Text>
              <Row p={0}>
                {links.map(({ data, href }, i) => (
                  <Column xs={6} key={i} p={0.5}>
                    <Link href={href} locale={router.locale} style={{ color: theme.palette.basic.light, textDecoration: "none" }}>
                      <Text color={theme.palette.basic.light} style={{ margin: 0 }}>{data}</Text>
                    </Link>
                  </Column>
                ))}
              </Row>
            </Stack>
          </Grid>

          <Grid item xs={12} lg={5}>
            <Stack spacing={1.2} sx={{ height: "100%", borderRight: { xs: "none", lg: `1px solid ${theme.palette.orange.main}` }, px: { xs: 0, lg: 2 } }}>
              <Text color={theme.palette.orange.main} variant="cardTitle" bold>
                {t("Layout.Header.Contact")}
              </Text>
              {contactInfo.map(({ data, icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  style={{ color: theme.palette.basic.light, textDecoration: "none", display: "flex", alignItems: "center", gap: "0.6rem" }}
                >
                  {icon}
                  <Text color={theme.palette.basic.light} style={{ margin: 0 }}>{data}</Text>
                </a>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} lg={3}>
            <Stack spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%", pl: { xs: 0, lg: 2 } }}>
              <Avatar
                sx={{
                  height: "auto",
                  width: { xs: "20vw", sm: "14vw", md: "10vw", lg: "8vw" },
                  maxWidth: "96px",
                }}
                variant="square"
                src="/images/AIS-Light-Blue-En-Logo.png"
                alt="logo 2"
              />
              <Stack direction="row" spacing={1}>
                {socialMediaLinks.map(({ icon, link }, i) => (
                  <Button
                    key={i}
                    href={link}
                    target="_blank"
                    variant="outlined"
                    sx={{
                      minWidth: "40px",
                      width: "40px",
                      height: "40px",
                      borderColor: theme.palette.orange.main,
                      color: theme.palette.basic.light,
                      "&:hover": { borderColor: theme.palette.basic.light, backgroundColor: "rgba(255,255,255,0.08)" },
                    }}
                  >
                    {icon}
                  </Button>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Widgets;
