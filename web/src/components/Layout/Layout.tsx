import React from "react";
import { Footer } from "../Footer/Footer";
import { Nav } from "../Nav/Nav";
import "./../../assets/styles/app.scss";

import { graphql, useStaticQuery } from "gatsby";
import { LayoutProps } from "./Layout.interface";
import { Header } from "../Header/Header";

export const Layout = ({ children }: LayoutProps) => {
  const navigationData = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          menuLinks {
            link
            name
          }
        }
      }
    }
  `);

  return (
    <>
      <Nav navItems={navigationData.site.siteMetadata.menuLinks} />
      <Header title="title" subtitle="subtitle" />
      <main>{children}</main>
      <Footer />
    </>
  );
};
