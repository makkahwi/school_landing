import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import * as React from "react";

function ResponsiveAppBar() {
  const router = useRouter();
  const { t } = useTranslation(router);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorSubMenu, setAnchorSubMenu] = React.useState<null | HTMLElement>(
    null
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
      style={{ backgroundColor: theme.palette.blue.dark }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense" style={{ margin: "10px auto" }}>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color={theme.palette.basic.light}
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
                            current === link + "mobile" ? "" : link + "mobile"
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
                              <ListItemButton
                                onClick={() => setSubmenu("")}
                                href={"/" + link + "/" + sublink}
                                key={y}
                              >
                                <ListItemText primary={subtitle} />
                              </ListItemButton>
                            )
                          )}
                        </List>
                      </Collapse>

                      <Divider />
                    </React.Fragment>
                  ) : (
                    <React.Fragment key={i}>
                      <ListItemButton
                        onClick={handleCloseNavMenu}
                        href={"/" + link}
                      >
                        <ListItemText primary={title} />
                      </ListItemButton>
                      {i !== links?.length && <Divider />}
                    </React.Fragment>
                  )
                )}
              </List>
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: theme.palette.basic.light,
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            <img src="/images/AIS-En-Mobile-Logo-1-White.png" width="75%" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {links.map(({ title, link, links }, i) =>
              links ? (
                <React.Fragment key={i}>
                  <Button
                    aria-controls={
                      submenu === link ? `${link}-basic-menu` : undefined
                    }
                    aria-haspopup="true"
                    aria-expanded={submenu === link ? "true" : undefined}
                    onClick={(e) => {
                      setSubmenu((current) => (current === link ? "" : link));
                      setAnchorSubMenu(e.currentTarget);
                    }}
                    sx={{
                      my: 2,
                      color: theme.palette.basic.light,
                      display: "block",
                    }}
                  >
                    {title}
                  </Button>

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
                        <Button
                          onClick={() => setSubmenu("")}
                          sx={{
                            color: theme.palette.blue.dark,
                            display: "block",
                          }}
                          href={"/" + link + "/" + sublink}
                        >
                          {subtitle}
                        </Button>
                      </MenuItem>
                    ))}
                  </Menu>
                </React.Fragment>
              ) : (
                <Button
                  key={i}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: theme.palette.basic.light,
                    display: "block",
                  }}
                  href={"/" + link}
                >
                  {title}
                </Button>
              )
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Typography
              onClick={() => console.log("lang change")}
              sx={{ p: 0 }}
              variant="h6"
              color={theme.palette.basic.light}
            >
              {t("OtherLang")}
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
