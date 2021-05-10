import styled from "styled-components";

export const PortfolioItemStyles = styled.div`
  color: black;
  .portfolio-item__image {
    width: 100%;
    max-width: 100%;
    border-radius: 8px 8px 0 0;
    pointer-events: none;
  }
  button {
    max-width: 100%;
    cursor: pointer;
    border-radius: 8px;
    background: white;
    box-shadow: 3px 3px 2px 2px #00000045;
    padding: 0;
    margin: 0;
    text-decoration: none;
    color: inherit;
    border: none;
  }
  p,
  h2 {
    margin: 0;
    padding: 10px 30px 40px;
  }
`;

export const PortfolioGridStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  .portfolio-carousel {
    margin: 0;
    display: flex;

    transform-style: preserve-3d;
    transition: transform 0.5s;

    .portfolio-item {
      width: 100%;
      min-width: 400px;
      box-sizing: border-box;
      backface-visibility: hidden;

      &:not(:first-of-type) {
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }

  nav {
    display: flex;
    justify-content: center;
    margin: 20px 0 0;

    button {
      flex: 0 0 auto;
      margin: 0 5px;

      cursor: pointer;

      color: #333;
      background: none;
      border: 1px solid;
      letter-spacing: 1px;
      padding: 5px 10px;
    }
  }
`;
