import { useState, useEffect } from "react";
import Navbar from "./navbar";
import { HeaderAnimation } from "@/components/layout/styles";
import { AppBar } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/router";

/**
 * the header section in the layout
 *
 */
const Header = () => {
    const isDesktop = useMediaQuery("(min-width:900px)");
    const [navIsOpened, setNavIsOpened] = useState(true);
    const [background, setBackground] = useState("transparent");
    const router = useRouter();
    const { locale } = router;

    useEffect(() => {
        setNavIsOpened(isDesktop);
    }, [isDesktop, locale]);

    return (
        <AppBar
            sx={{
                position: { xs: "fixed", md: "static" },
                bgcolor: background,
                transition: "background-color 0.7s ease",
                padding: 1,
                width: { xs: "100%", md: "auto" },
                height: { xs: "5rem", md: "100vh" },
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
