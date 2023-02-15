import Header from "./Header";
import Main from "./Main";
import HeadElement from "./HeadElement";
import { LayoutBox } from "@/components/layout/styles";

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
