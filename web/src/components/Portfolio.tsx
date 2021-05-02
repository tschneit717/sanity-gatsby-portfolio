import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { PortfolioItem, PortfolioGrid } from "../assets/styles/components/PortfolioItem";
import "./../../";

interface MyNode {
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      gatsbyImageData: any;
    };
    src: any;
  };
  excerpt: {
    children: {
      text: string;
    };
  };
}

const Portfolio = () => {
  function rotateItem(event: Event, item: String) {
    const portfolioCard = event.target as HTMLElement;
    if (portfolioCard.closest(".portfolio-item")) {
      portfolioCard.style.transform = "translate3D";
    }
  }

  function resetItem() {}

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
              gatsbyImageData(placeholder: BLURRED, formats: JPG)
            }
          }
          excerpt {
            children {
              text
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
  return (
    <div>
      <h2>Portfolio Page</h2>
      <PortfolioGrid>
        {allProfileItems.nodes.map((node: MyNode) => {
          const image = getImage(node.mainImage.asset.gatsbyImageData);
          const item = node.slug.current;
          return (
            <PortfolioItem
              id={item}
              onMouseMove={(event, item) => rotateItem(event, item)}
              onMouseLeave={() => resetItem()}
              className="portfolio-item"
              key={node.slug.current}
            >
              <Link to={node.slug.current}>
                <GatsbyImage className="portfolio-item__image" image={image} alt={node.title} />
                <div>
                  <h2>{node.title}</h2>
                  <p>{node.excerpt[0].children[0].text}</p>
                </div>
              </Link>
            </PortfolioItem>
          );
        })}
      </PortfolioGrid>
    </div>
  );
};

export default Portfolio;
