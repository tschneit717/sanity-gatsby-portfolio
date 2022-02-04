import React from "react";
import { Footer } from "../Footer/Footer";
import { Nav } from "../Nav/Nav";
import "./../../assets/styles/app.scss";

import { LayoutProps } from "./Layout.interface";
import { Header } from "../Header/Header";
import { Page } from "../Page/Page";

export const Layout = ({ children }: LayoutProps) => {
  console.log(children);
  return (
    <div className="absolute t0 l0 h100 w100">
      <Nav />
      <Header title="title" subtitle="subtitle" />
      {children}
      <Footer />
    </div>
  );
};
