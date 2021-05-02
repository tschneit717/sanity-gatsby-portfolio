// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const clientConfig = require("./client-config");
const token = process.env.SANITY_READ_TOKEN;

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`quicksand`],
        display: "swap",
      },
    },
  ],
  siteMetadata: {
    title: "Tom Schneider",
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About Me",
        link: "/about",
      },
      {
        name: "Portfolio",
        link: "/portfolio",
      },
      {
        name: "Hobbies",
        link: "/hobbies",
      },
      {
        name: "Get In Touch →",
        link: "/contact",
      },
    ],
  },
};
