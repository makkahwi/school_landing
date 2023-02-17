import HeadElement from "@/components/layout/headElement";
import Header from "@/components/layout/header";
import Main from "@/components/layout/main";
import { LayoutBox } from "./styles";
import { useRouter } from "next/router";
import React from "react";

/**
 * layout of the website
 *
 */
const Layout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const { locale } = router;

    return (
        <LayoutBox
            justifyContent="space-between"
            direction={{
                xs: "column",
                md: locale === "en" ? "row" : "row-reverse",
            }}
        >
            <HeadElement />
            <Header />
            <Main>{children}</Main>
        </LayoutBox>
    );
};

export default Layout;
