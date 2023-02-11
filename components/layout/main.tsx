import Footer from "./footer";
import { MainContainer } from "@/components/layout/styles";

/**
 * the main section in the layout
 *
 */
const Main = ({ children }: { children: React.ReactNode }) => {
    return (
        <MainContainer>
            {children}
            <Footer />
        </MainContainer>
    );
};

export default Main;
