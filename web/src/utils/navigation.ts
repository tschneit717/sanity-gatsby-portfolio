import { graphql, useStaticQuery } from "gatsby";

export const navigationData = useStaticQuery(graphql`
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
