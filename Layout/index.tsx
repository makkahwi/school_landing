import Footer from "@/Layout/Footer";
import HeadElement from "@/Layout/Head";
import Header from "@/Layout/Header";
import Main from "@/Layout/Main";
import Widgets from "@/Layout/Widgets";
import React from "react";

import FloatingButton from "./FloatingButton";
import { LayoutBox } from "./styles";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutBox>
      <HeadElement />
      <Header />
      <Main>{children}</Main>
      <FloatingButton />
      <Widgets />
      <Footer />
    </LayoutBox>
  );
};

export default Layout;
