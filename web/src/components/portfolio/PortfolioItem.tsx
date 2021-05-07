import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { PortfolioItemStyles } from "../../assets/styles/components/PortfolioItemStyles";
import TiltItem from "../TiltItem";

const PortfolioItem = ({ node, image, slug, style }) => {
  return (
    <div style={style} id={slug} className="portfolio-item">
      <TiltItem>
        <PortfolioItemStyles>
          <button onClick={() => console.log("yeet")}>
            <GatsbyImage className="portfolio-item__image" image={image} alt={node.title} />
            <div>
              <h2>{node.title}</h2>
              <p>{node.excerpt[0].children[0].text}</p>
            </div>
          </button>
        </PortfolioItemStyles>
      </TiltItem>
    </div>
  );
};

export default PortfolioItem;
