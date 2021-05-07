import React, { useEffect, useState, createRef } from "react";
import { getImage } from "gatsby-plugin-image";
import { PortfolioGridStyles } from "../../assets/styles/components/PortfolioItemStyles";
import PortfolioItem from "./PortfolioItem";
import { PortfolioNav } from "./PortfolioNav";

interface PortfolioState {
  currentCard: number;
  theta: number;
  carousel: {
    children?: [];
    width?: number;
    apothem?: number;
  };
}

const PortfolioCarousel = ({ portfolioItems }) => {
  const carouselWrapper = createRef<HTMLDivElement>();
  const carouselFigure = createRef<HTMLDivElement>();
  const carouselPadding = window.innerWidth - 200;
  const theta = (2 * Math.PI) / portfolioItems.length;
  const apothem =
    document.querySelectorAll(".portfolio-item")[0]?.clientWidth /
    (2 * Math.tan(Math.PI / parseInt(portfolioItems.length)));

  const [state, setState] = useState({
    currentCard: 0,
    width: carouselPadding,
  });

  const rotateCarousel = (index: number) => {
    carouselFigure.current.style.transform = `rotateY(${index * -theta}rad)`;
  };

  useEffect(() => {
    rotateCarousel(state.currentCard);
  });

  useEffect(() => {
    setState((state) => ({
      ...state,
      apothem,
    }));
  }, [apothem]);

  useEffect(() => {
    const updateWidth = () => {
      const newWidth = window.innerWidth;
      setState((state) => ({ ...state, width: newWidth }));
    };

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  function handleNav(direction: string) {
    const newCurrentCard = direction == "PREV" ? state.currentCard - 1 : state.currentCard + 1;
    setState({ ...state, currentCard: newCurrentCard });
  }

  return (
    <PortfolioGridStyles ref={carouselWrapper}>
      <div
        ref={carouselFigure}
        style={{ transformOrigin: "50% 50%" + -apothem + "px" }}
        className="portfolio-carousel"
      >
        {portfolioItems.map((node, i) => {
          const image = getImage(node.mainImage.asset.gatsbyImageData),
            slug = node.slug.current,
            styles = {
              transform: "rotateY(" + i * theta + "rad)",
              transformOrigin: "50% 50% " + -apothem + "px",
              padding: "0 20px 0",
            };
          return (
            <PortfolioItem
              style={styles}
              key={slug}
              node={node}
              image={image}
              slug={slug}
            ></PortfolioItem>
          );
        })}
      </div>
      <PortfolioNav handleNav={handleNav}></PortfolioNav>
    </PortfolioGridStyles>
  );
};

export default PortfolioCarousel;
