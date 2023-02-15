import HeadElement from "@/components/layout/headElement";
import Header from "@/components/layout/header";
import Main from "@/components/layout/main";
import { LayoutBox } from "./styles";

/**
 * layout of the website
 *
 */
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <LayoutBox
            justifyContent="space-between"
            direction={{ xs: "column", md: "row" }}
        >
            <HeadElement />
            <Header />
            <Main>{children}</Main>
        </LayoutBox>
    );
};

export default Layout;
