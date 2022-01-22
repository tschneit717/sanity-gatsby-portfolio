import React from "react";
import { Footer } from "../Footer/Footer";
import { Nav } from "../Nav/Nav";
import "./../../assets/styles/app.scss";

import { graphql, useStaticQuery } from "gatsby";
import { LayoutProps } from "./Layout.interface";
import { Header } from "../Header/Header";
import { navigationData } from "../../utils/navigation";
import { BrowserRouter } from "react-router-dom";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <BrowserRouter>
      <Nav navItems={navigationData()} />
      <Header title="title" subtitle="subtitle" />
      <main>{children}</main>
      <Footer text={""} gridCount={0} children={undefined} />
    </BrowserRouter>
  );
};
