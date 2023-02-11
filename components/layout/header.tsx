import { useState } from "react";
import Navbar from "./navbar";
import { HeaderAnimation } from "@/components/layout/styles";
import { AppBar, Container, Stack } from "@mui/material";

/**
 * the header section in the layout
 *
 */
const Header = () => {
    const [navIsOpened, setNavIsOpened] = useState(false);
    const [background, setBackground] = useState("transparent");

    return (
        <AppBar
            position="static"
            sx={{
                bgcolor: background,
                transition: "background-color 0.7s ease",
                paddingLeft: 2,
                paddingTop: { xs: 1, md: "2vw"},
                paddingBottom: { xs: 1, md: "2vw"},
                width: { xs: "100%", md: "auto" },
                height: { xs: "auto", md: "100vh" },
                animation: {
                    xs: `${
                        navIsOpened
                            ? HeaderAnimation.HeaderOpenningMobile
                            : HeaderAnimation.HeaderClosingMobile
                    } 0.7s both ease`,
                    md: `${
                        navIsOpened
                            ? HeaderAnimation.HeaderOpenningDesktop
                            : HeaderAnimation.HeaderClosingDesktop
                    } 0.7s both ease`,
                },
            }}
        >
            <Navbar
                navIsOpened={navIsOpened}
                setNavIsOpened={setNavIsOpened}
                setBackground={setBackground}
            />
        </AppBar>
    );
};

export default Header;
