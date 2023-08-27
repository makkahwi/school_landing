import HeadElement from "@/Layout/headElement";
import Header from "@/Layout/header";
import Main from "@/Layout/main";
import { useRouter } from "next/router";
import React from "react";

import { LayoutBox } from "./styles";

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
