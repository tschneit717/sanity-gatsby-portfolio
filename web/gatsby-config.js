// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});
const {
  MdMailOutline,
  MdOutlineCode,
  MdOutlineHome,
  MdOutlinePermIdentity,
  MdOutlineGamepad,
} = require("react-icons/md");

const clientConfig = require("./client-config");
const token = process.env.SANITY_READ_TOKEN;

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    "gatsby-plugin-sass",
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
  },
};
