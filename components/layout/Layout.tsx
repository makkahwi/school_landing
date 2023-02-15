import HeadElement from "./headElement";
import Header from "./header";
import Main from "./main";
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
