import Footer from "@/Layout/AppFooter";
import { MainContainer } from "@/Layout/styles";
import { useRouter } from "next/router";

import Widgets from "./AppWidgets";

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
