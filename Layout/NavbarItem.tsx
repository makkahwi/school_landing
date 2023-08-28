import Link from "next/link";
import React from "react";
import { HeaderButton, NavLinkStyles, LinkElementProps } from "@/Layout/styles";
import { Container, Stack, Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";

const NavItem = (props: LinkElementProps) => {
  const theme = useTheme();
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation(router);

  const {
    data,
    icon,
    href = router.asPath,
    itemLocale = locale,
    onClick,
    color,
  } = props;

  return onClick ? (
    <Stack
      direction={locale === "en" ? "row" : "row-reverse"}
      justifyContent={{ xs: "space-between", md: "flex-start" }}
      alignItems="center"
      sx={{ width: "100%" }}
    >
      <HeaderButton
        disableGutters={true}
        sx={{ padding: { xs: 1, md: 2 }, margin: 0, width: "auto" }}
        onClick={onClick}
      >
        {icon}
      </HeaderButton>
      <Container
        disableGutters={true}
        sx={{
          width: "auto",
          margin: { xs: 2, md: 0 },
          padding: { xs: 0, md: 2 },
          minHeight: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        {data}
      </Container>
    </Stack>
  ) : (
    <Link href={href} locale={itemLocale} style={NavLinkStyles}>
      <Stack
        direction={locale === "en" ? "row" : "row-reverse"}
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          width: "100%",
          transition: "0.2s ease",
          "&:hover": {
            boxShadow: "0px 0px 0px 5px darkgray",
            transform: locale === "en" ? "translate(5%)" : "translate(-5%)",
          },
        }}
      >
        <HeaderButton
          disableGutters={true}
          sx={{ padding: { xs: 2.3, md: 2 } }}
        >
          {icon}
        </HeaderButton>

        <Container disableGutters={true} sx={{ padding: 2 }}>
          <Typography
            variant="h5"
            color={color}
            sx={{
              direction: locale === "en" ? "ltr" : "rtl",
            }}
          >
            {t(data)}
          </Typography>
        </Container>
      </Stack>
    </Link>
  );
};

export default NavItem;
