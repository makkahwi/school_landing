import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

function ResponsiveAppBar() {
  const router = useRouter();
  const { t } = useTranslation(router);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [anchorSubMenu, setAnchorSubMenu] = React.useState<null | HTMLElement>(
    null,
  );
  const [submenu, setSubmenu] = React.useState<string>("");

  const links = [
    { title: t("Home"), link: "/" },
    {
      title: t("About.About"),
      link: "/about",
      links: [
        { title: t("About.WhyAIS.WhyAIS"), link: "/why-ais" },
        { title: t("About.Facilities.Title"), link: "/facilities" },
        // { title: "AIS Team", link: "/ais-team" },
      ],
    },
    {
      title: t("Academics.Title"),
      link: "/academics",
      links: [
        { title: t("Academics.StudyLevels.Title"), link: "/study-levels" },
        { title: t("Academics.Curriculum.Title"), link: "/curriculum" },
        { title: t("Academics.CoCurriculum.Title"), link: "/co-curriculum" },
      ],
    },
    {
      title: t("Engage.Title"),
      link: "/engage",
      links: [
        {
          title: t("Engage.Registration.Title"),
          link: "/registration-fees",
        },
        { title: t("Engage.Jobs.Title"), link: "/job-opportunities" },
      ],
    },
    { title: t("News.News"), link: "/news" },
    { title: t("Contact.Contact"), link: "/contact" },
  ];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgba(7, 29, 52, 0.96)",
        borderBottom: "1px solid rgba(255,255,255,.12)",
        backdropFilter: "blur(14px)",
        direction: router.locale === "ar" ? "rtl" : "ltr",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: { xs: 74, md: 92 }, gap: 3 }}>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="open navigation"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: theme.palette.basic.light }}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  borderRadius: 2,
                  minWidth: 280,
                  mt: 1,
                },
              }}
            >
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                  display: { xs: "block", md: "none" },
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                {links.map(({ title, link, links }, i) =>
                  links ? (
                    <React.Fragment key={i}>
                      <ListItemButton
                        onClick={() => {
                          setSubmenu((current) =>
                            current === link + "mobile" ? "" : link + "mobile",
                          );
                        }}
                      >
                        <ListItemText primary={title} />
                        {submenu === link + "mobile" ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        )}
                      </ListItemButton>

                      <Collapse
                        in={submenu === link + "mobile"}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="div" disablePadding>
                          {links.map(
                            ({ link: sublink, title: subtitle }, y) => (
                              <Link
                                href={link + "/" + sublink}
                                key={y}
                                onClick={() => {
                                  setSubmenu("");
                                  handleCloseNavMenu();
                                }}
                                role="button"
                                style={{
                                  textDecoration: "none",
                                  color: theme.palette.blue.dark,
                                  display: "block",
                                }}
                              >
                                <ListItemButton>
                                  <ListItemText primary={subtitle} />
                                </ListItemButton>
                              </Link>
                            ),
                          )}
                        </List>
                      </Collapse>

                      <Divider />
                    </React.Fragment>
                  ) : (
                    <React.Fragment key={i}>
                      <Link
                        href={link}
                        key={i}
                        onClick={handleCloseNavMenu}
                        role="button"
                        style={{
                          textDecoration: "none",
                          color: theme.palette.blue.dark,
                          display: "block",
                        }}
                      >
                        <ListItemButton>
                          <ListItemText primary={title} />
                        </ListItemButton>
                      </Link>
                      {i !== links?.length && <Divider />}
                    </React.Fragment>
                  ),
                )}
              </List>
            </Menu>
          </Box>

          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              minWidth: 86,
              color: theme.palette.basic.light,
              textDecoration: "none",
            }}
          >
            <img
              src="/images/AIS-En-Mobile-Logo-1-White.png"
              alt="Al-Aqsa Integrated School"
              style={{ width: 200, height: "auto", display: "block" }}
            />
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
            }}
          >
            {links.map(({ title, link, links }, i) =>
              links ? (
                <React.Fragment key={i}>
                  <div
                    aria-controls={
                      submenu === link ? `${link}-basic-menu` : undefined
                    }
                    aria-haspopup="true"
                    aria-expanded={submenu === link ? "true" : undefined}
                    onClick={(e) => {
                      setSubmenu((current) => (current === link ? "" : link));
                      setAnchorSubMenu(e.currentTarget);
                    }}
                    style={{
                      textDecoration: "none",
                      color: theme.palette.basic.light,
                      display: "block",
                      cursor: "pointer",
                      textTransform: "none",
                      fontWeight: 750,
                      fontSize: "0.95rem",
                    }}
                    role="button"
                  >
                    {title}
                  </div>

                  <Menu
                    id={`${link}-basic-menu`}
                    open={submenu === link}
                    anchorEl={anchorSubMenu}
                    onClose={() => setSubmenu("")}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    {links.map(({ link: sublink, title: subtitle }, y) => (
                      <MenuItem onClick={() => setSubmenu("")} key={y}>
                        <Link
                          href={link + "/" + sublink}
                          onClick={() => setSubmenu("")}
                          role="button"
                          style={{
                            textDecoration: "none",
                            color: theme.palette.blue.dark,
                            display: "block",
                          }}
                        >
                          {subtitle}
                        </Link>
                      </MenuItem>
                    ))}
                  </Menu>
                </React.Fragment>
              ) : (
                <Link
                  key={i}
                  href={link}
                  onClick={handleCloseNavMenu}
                  role="button"
                  style={{
                    textDecoration: "none",
                    color: theme.palette.basic.light,
                    display: "block",
                    textTransform: "none",
                    fontWeight: 750,
                    fontSize: "0.95rem",
                  }}
                >
                  {title}
                </Link>
              ),
            )}
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              alignItems: "center",
              gap: { xs: 1.2, md: 2 },
            }}
          >
            <Button
              component={Link}
              href="/engage/registration-fees"
              variant="contained"
              size="small"
              sx={{
                display: { xs: "none", sm: "inline-flex" },
                px: 2.4,
                py: 1,
                whiteSpace: "nowrap",
              }}
            >
              {router.locale === "ar" ? "سجل الآن" : "Apply Now"}
            </Button>
            <Link
              href=""
              locale={router.locale === "ar" ? "en" : "ar"}
              role="button"
              style={{
                textDecoration: "none",
                color: theme.palette.secondary.main,
                display: "block",
                fontWeight: 800,
                border: "1px solid rgba(216,175,82,.35)",
                padding: "7px 10px",
                borderRadius: 6,
                whiteSpace: "nowrap",
              }}
            >
              {router.locale === "ar" ? "English" : "العربية"}
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
