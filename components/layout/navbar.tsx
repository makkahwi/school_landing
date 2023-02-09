import colors from "@/styles/colors";
import { navbarPage } from "@/utils/constants";
// import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { useRouter } from "next/router";
import { AdaptableText, Flex } from "@/styles/shared";
import { useEffect, useState } from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { Dispatch, ReactNode, SetStateAction } from "react";

/**
 * the navbar section in the layout
 *
 */
const Navbar = ({
    navIsOpened,
    setNavIsOpenedirst,
}: {
    navIsOpened: boolean;
    setNavIsOpenedirst: Dispatch<SetStateAction<boolean>>;
}) => {
    const [navbarTransform, setNavbarTransform] = useState("translate(-100%)");
    const [background, setBackground] = useState("transparent");
    const [color, setColor] = useState("transparent");
    const router = useRouter();
    const { locale } = router;
    const iconSize = "10%";

    useEffect(() => {
        setNavbarTransform(navIsOpened ? "none" : "translate(-100%)");
    }, [navIsOpened]);

    useEffect(() => {
        switch (router.pathname) {
            case "/":
                setBackground(colors.blue);
                setColor(colors.white);
                break;

            case "/curriculum":
                setBackground(colors.clay);
                setColor(colors.blue);
                break;

            case "/levels":
                setBackground(colors.orange);
                setColor(colors.white);
                break;

            case "/about":
                setBackground(colors.orange);
                setColor(colors.white);
                break;

            case "/registration":
                setBackground(colors.blue);
                setColor(colors.white);
                break;

            case "/jobs":
                setBackground(colors.blue);
                setColor(colors.white);
                break;

            case "/latest":
                setBackground(colors.blue);
                setColor(colors.white);
                break;

            default:
                break;
        }

        setNavIsOpenedirst(false);
    }, [router.pathname, setNavIsOpenedirst]);

    const linkElement = ({ text, icon }: { text: string; icon: ReactNode }) => {
        return (
            <Flex main="flex-start" cross="center" style={{ width: "100%" }}>
                {icon}
                <AdaptableText
                    mobile="6vw"
                    desktop="2vw"
                    style={{
                        padding: "0 0 0 1.5vw",
                        width: "80%",
                    }}
                    color={color}
                >
                    {text}
                </AdaptableText>
            </Flex>
        );
    };

    return <nav></nav>;
};

export default Navbar;
