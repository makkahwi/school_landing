import Footer from "@/components/layout/footer";
import { MainContainer } from "@/components/layout/styles";
import { useRouter } from "next/router";

/**
 * the main section in the layout
 *
 */
const Main = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const { locale } = router;

    return (
        <MainContainer
            sx={{
                direction: locale === "en" ? "ltr" : "rtl",
            }}
        >
            {children}
            <Footer />
        </MainContainer>
    );
};

export default Main;
