import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Navigation from "./Navigation";
import "./../assets/styles/globalStyles.scss";
import "basscss";

import { graphql, useStaticQuery } from "gatsby";

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
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
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      />
      <header>
        <Navigation query={data} />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
