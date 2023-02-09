import Footer from "./footer";
import Header from "./header";
import Main from "./main";
import HeadElement from "./headElement";

/**
 * layout of the website
 *
 */
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <HeadElement />
            <Header />
            <Main>{children}</Main>
            <Footer />
        </div>
    );
};

export default Layout;
