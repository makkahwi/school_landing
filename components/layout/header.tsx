import { HiBars3 } from "react-icons/hi2";
import colors from "@/styles/colors";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Image from "next/image";

/**
 * the header section in the layout
 *
 */
const Header = () => {
    const [navIsOpened, setNavIsOpenedirst] = useState(false);
    const [iconTransform, setIconTransform] = useState("none");

    useEffect(() => {
        setIconTransform(navIsOpened ? "rotate(-90deg)" : "none");
    }, [navIsOpened]);

    return (
        <header>
            {/* <HiBars3
                color={colors.blue}
                onClick={() => {
                    setNavIsOpenedirst((prev) => !prev);
                }}
            />

            <Image
                src="/header/header-logo.jpg"
                alt="header logo"
            /> */}
            <Navbar
                navIsOpened={navIsOpened}
                setNavIsOpenedirst={setNavIsOpenedirst}
            />
        </header>
    );
};

export default Header;
