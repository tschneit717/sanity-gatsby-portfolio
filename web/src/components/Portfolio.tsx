import React from "react";
import { getImage } from "gatsby-plugin-image";
import { PortfolioGridStyles } from "../assets/styles/components/PortfolioItemStyles";
import PortfolioItem from "./PortfolioItem";

const Portfolio = ({ portfolioItems }) => {
  return (
    <PortfolioGridStyles>
      {portfolioItems.map((node) => {
        const image = getImage(node.mainImage.asset.gatsbyImageData);
        const slug = node.slug.current;
        return <PortfolioItem key={slug} node={node} image={image} slug={slug}></PortfolioItem>;
      })}
    </PortfolioGridStyles>
  );
};

export default Portfolio;
