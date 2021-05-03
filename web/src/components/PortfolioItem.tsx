import { Link } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { PortfolioItemStyles } from "../assets/styles/components/PortfolioItemStyles";
import TiltItem from "./TiltItem";

export default function PortfolioItem({ node, image, slug }) {
  return (
    <TiltItem>
      <PortfolioItemStyles id={slug} className="portfolio-item">
        <Link to={slug}>
          <GatsbyImage className="portfolio-item__image" image={image} alt={node.title} />
          <div>
            <h2>{node.title}</h2>
            <p>{node.excerpt[0].children[0].text}</p>
          </div>
        </Link>
      </PortfolioItemStyles>
    </TiltItem>
  );
}
