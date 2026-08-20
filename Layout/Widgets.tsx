import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Avatar, Box, Button, Grid, Stack, Typography } from "@mui/material";
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
    {
      data: t("Layout.Widgets.Address"),
      icon: <FmdGoodIcon fontSize="small" />,
      href: "https://goo.gl/maps/hgTQf8j4N9SfZ1Tc6",
    },
    {
      data: t("Layout.Widgets.Phone"),
      icon: <LocalPhoneIcon fontSize="small" />,
      href: "tel:+96264645411",
    },
    {
      data: t("Layout.Widgets.Email"),
      icon: <EmailIcon fontSize="small" />,
      href: "mailto:Info@aisamman.com",
    },
  ];

  const socialMediaLinks = [
    {
      icon: <FacebookIcon fontSize="small" />,
      link: "https://www.facebook.com/ArabicInternationalSchoolAmman",
      label: "Facebook",
    },
    {
      icon: <InstagramIcon fontSize="small" />,
      link: "https://www.instagram.com/aisamman/",
      label: "Instagram",
    },
    {
      icon: <YouTubeIcon fontSize="small" />,
      link: "https://www.youtube.com/channel/UCcWDhM5HG1zk2m_EvXzr1Kg",
      label: "YouTube",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.blue.dark,
        py: { xs: 4, md: 5 },
        px: { xs: 2, md: 3 },
      }}
    >
      <Grid
        container
        spacing={{ xs: 3, md: 3 }}
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} md={4}>
          <Stack spacing={1.5} alignItems="center">
            <Avatar
              variant="square"
              src="/images/AIS-Light-Blue-En-Logo.png"
              alt="AIS logo"
              sx={{ width: { xs: 84, md: 96 }, height: "auto" }}
            />
            <Stack direction="row" spacing={1} justifyContent="center">
              {socialMediaLinks.map(({ icon, link, label }) => (
                <Button
                  key={label}
                  href={link}
                  target="_blank"
                  aria-label={label}
                  sx={{
                    minWidth: 34,
                    width: 34,
                    height: 34,
                    color: theme.palette.basic.light,
                    border: `1px solid ${theme.palette.orange.main}`,
                    p: 0,
                  }}
                >
                  {icon}
                </Button>
              ))}
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack spacing={1.1} alignItems="center">
            <Typography
              sx={{
                m: 0,
                color: theme.palette.orange.main,
                fontWeight: 700,
                fontSize: "1.25rem",
              }}
            >
              Quick Links
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2,minmax(120px,1fr))",
                gap: 0.7,
                justifyContent: "center",
              }}
            >
              {links.map(({ data, href }) => (
                <Link
                  key={href}
                  href={href}
                  locale={router.locale}
                  style={{
                    color: theme.palette.basic.light,
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    sx={{
                      m: 0,
                      color: theme.palette.basic.light,
                      fontSize: "0.98rem",
                    }}
                  >
                    {data}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack spacing={1.1} alignItems="center">
            <Typography
              sx={{
                m: 0,
                color: theme.palette.orange.main,
                fontWeight: 700,
                fontSize: "1.25rem",
              }}
            >
              Contact
            </Typography>
            {contactInfo.map(({ data, icon, href }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                style={{
                  color: theme.palette.basic.light,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.55rem",
                }}
              >
                <Box sx={{ color: theme.palette.orange.main, display: "flex" }}>
                  {icon}
                </Box>
                <Typography
                  sx={{
                    m: 0,
                    color: theme.palette.basic.light,
                    fontSize: "0.98rem",
                  }}
                >
                  {data}
                </Typography>
              </a>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Widgets;
