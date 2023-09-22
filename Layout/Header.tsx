import Text from "@/components/common/Text";
import theme from "@/styles/theme";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

const links = [
  { title: "Home", link: "" },
  {
    title: "About",
    link: "about",
    links: [
      { title: "Why AIS", link: "why-ais" },
      { title: "AIS Facilities", link: "facilities" },
      // { title: "AIS Team", link: "ais-team" },
    ],
  },
  {
    title: "Academics",
    link: "academics",
    links: [
      { title: "Study Levels", link: "study-levels" },
      { title: "Curriculum", link: "curriculum" },
      { title: "Co-Curriculum", link: "co-curriculum" },
    ],
  },
  {
    title: "Engage",
    link: "engage",
    links: [
      { title: "Registration & Fees", link: "registration-fees" },
      { title: "Job Opportunities", link: "job-opportunities" },
    ],
  },
  { title: "News", link: "news" },
  { title: "Contact", link: "contact" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorSubMenu, setAnchorSubMenu] = React.useState<null | HTMLElement>(
    null
  );

  const [submenu, setSubmenu] = React.useState<string>("");

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
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: theme.palette.basic.light,
              textDecoration: "none",
            }}
          >
            <img src="/images/AIS-En-Mobile-Logo-1-White.png" width="90%" />
          </Typography>

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
              {links.map(({ title, link }, i) => (
                <MenuItem key={i} onClick={handleCloseNavMenu}>
                  <Text href={"/" + link} center>
                    {title}
                  </Text>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: theme.palette.basic.light,
              textDecoration: "none",
            }}
          >
            AIS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {links.map(({ title, link, links }, i) =>
              links ? (
                <React.Fragment key={i}>
                  <Button
                    key={i}
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
              variant="h4"
              color={theme.palette.basic.light}
            >
              ع
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
