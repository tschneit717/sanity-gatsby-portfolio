import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const Portfolio = () => {
  const { allProfileItems } = useStaticQuery(graphql`
    query MyQuery {
      allProfileItems: allSanityPortfolioItem {
        nodes {
          title
          slug {
            current
          }
          mainImage {
            asset {
              fluid(maxWidth: 400) {
                base64
                srcWebp
                srcSetWebp
              }
            }
          }
          file {
            _key
            _type
            _rawAsset
          }
        }
      }
    }
  `);
  console.log(allProfileItems.nodes);
  return (
    <div>
      <h2>Portfolio Page</h2>
      {/* {allProfileItems.nodes.forEach((node) => {
        console.log(node)
        <div>node.title</div>
      })} */}
    </div>
  );
};

export default Portfolio;
