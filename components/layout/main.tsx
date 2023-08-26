import Footer from "@/components/layout/footer";
import { MainContainer } from "@/components/layout/styles";
import { useRouter } from "next/router";
import Widgets from "./widgets";

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
      <Widgets />
      <Footer />
    </MainContainer>
  );
};

export default Main;
