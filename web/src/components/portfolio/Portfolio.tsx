import React, { useEffect, useState, createRef } from "react";
import { getImage } from "gatsby-plugin-image";
import { PortfolioGridStyles } from "../../assets/styles/components/PortfolioItemStyles";
import PortfolioItem from "./PortfolioItem";
import { PortfolioNav } from "./PortfolioNav";

interface PortfolioState {
  currentCard: number;
}

const PortfolioCarousel = ({ portfolioItems }) => {
  const [currentCard, setCurrentCard] = useState(0);

  const handleNav = (direction: string) => {
    const newCurrentCard = direction == "PREV" ? currentCard - 1 : currentCard + 1;
    setCurrentCard(newCurrentCard);
  };

  return (
    <>
      <PortfolioGridStyles>
        {portfolioItems.map((node, i) => {
          const image = getImage(node.mainImage.asset.gatsbyImageData),
            slug = node.slug.current;
          return <PortfolioItem key={slug} node={node} image={image} slug={slug}></PortfolioItem>;
        })}
      </PortfolioGridStyles>
      <PortfolioNav handleNav={handleNav}></PortfolioNav>
    </>
  );
};

export default PortfolioCarousel;
