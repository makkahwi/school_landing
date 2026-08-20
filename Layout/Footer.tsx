import useTranslation from "@/hooks/useTranslation";
import { FooterContainer } from "@/Layout/styles";
import theme from "@/styles/theme";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const { t } = useTranslation(router);
  const isArabic = router.locale === "ar";

  const links = [
    { href: "/about", label: isArabic ? "عن المدرسة" : "About" },
    { href: "/academics", label: isArabic ? "الأكاديميات" : "Academics" },
    { href: "/engage/registration-fees", label: isArabic ? "الرسوم" : "Fees" },
    { href: "/about/facilities", label: isArabic ? "المرافق" : "Facilities" },
    { href: "/news", label: isArabic ? "الأخبار" : "News" },
    { href: "/contact", label: isArabic ? "تواصل معنا" : "Contact" },
  ];

  return (
    <FooterContainer>
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 2, md: 3 },
          py: { xs: 4, md: 5 },
          direction: isArabic ? "rtl" : "ltr",
        }}
      >
        <Stack spacing={3.5}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 3, md: 6 }}
            sx={{
              alignItems: { xs: "flex-start", md: "center" },
              justifyContent: "space-between",
            }}
          >
            <Stack direction="row" spacing={2.2} sx={{ alignItems: "center" }}>
              <Box
                component="img"
                src="/images/AIS-En-Mobile-Logo-1-White.png"
                alt="Al-Aqsa Integrated School"
                sx={{ width: 300, flex: "0 0 auto" }}
              />
              <Box>
                <Typography
                  component="h2"
                  sx={{
                    fontSize: { xs: 22, md: 28 },
                    fontWeight: 900,
                    lineHeight: 1.15,
                  }}
                >
                  {isArabic
                    ? "مدرسة الأقصى التكاملية"
                    : "Al-Aqsa Integrated School"}
                </Typography>
                <Typography
                  sx={{
                    mt: 0.8,
                    color: "rgba(255,255,255,.68)",
                    lineHeight: 1.6,
                  }}
                >
                  {isArabic
                    ? "تعليم إسلامي دولي في كوالالمبور، ماليزيا."
                    : "International Islamic education in Kuala Lumpur, Malaysia."}
                </Typography>
              </Box>
            </Stack>

            <Stack
              direction="row"
              spacing={{ xs: 1.6, md: 2.4 }}
              useFlexGap
              sx={{
                flexWrap: "wrap",
                justifyContent: { xs: "flex-start", md: "flex-end" },
              }}
            >
              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  style={{
                    color: "rgba(255,255,255,.82)",
                    textDecoration: "none",
                    fontWeight: 750,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Stack>

          <Divider sx={{ borderColor: "rgba(255,255,255,.14)" }} />

          <Stack
            direction={{ xs: "column", lg: "row" }}
            spacing={{ xs: 2, lg: 4 }}
            sx={{
              justifyContent: "space-between",
              color: "rgba(255,255,255,.72)",
            }}
          >
            <Typography sx={{ lineHeight: 1.7 }}>
              No.5, Jalan Pahang Kecil, 53200 Kuala Lumpur, Malaysia
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 0.8, sm: 2.5 }}
            >
              <Typography>+6011-57-848382</Typography>
              <Typography>Principal@aqsa.edu.my</Typography>
              <Typography>
                {isArabic
                  ? "الاثنين - الجمعة، 8ص - 3م"
                  : "Mon - Fri, 8am - 3pm"}
              </Typography>
            </Stack>
          </Stack>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={1.5}
            sx={{
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", md: "center" },
              color: "rgba(255,255,255,.58)",
              fontSize: 13,
            }}
          >
            <Typography sx={{ fontSize: 13 }}>
              {t("Layout.Footer.CopyRights") + new Date().getFullYear()}
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{ alignItems: "center", flexWrap: "wrap" }}
            >
              <Link
                href="/terms-conditions"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {isArabic ? "الشروط" : "Terms"}
              </Link>
              <Link
                href="/website-privacy"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {isArabic ? "الخصوصية" : "Privacy"}
              </Link>
              <Typography component="span" sx={{ fontSize: 13 }}>
                {t("Layout.Footer.By")}{" "}
                <a
                  href="https://www.Suhaib.dev/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: theme.palette.secondary.main }}
                >
                  Suhaib Ahmad
                </a>
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
