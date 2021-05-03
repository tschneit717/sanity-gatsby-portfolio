import styled from "styled-components";

export const PortfolioItemStyles = styled.div`
  border-radius: 8px;
  background: white;
  box-shadow: 3px 3px 2px 2px #00000045;
  padding: 0;
  margin: 0;
  color: black;
  .portfolio-item__image {
    width: 100%;
    border-radius: 8px 8px 0 0;
    pointer-events: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  p,
  h2 {
    margin: 0;
    padding: 10px 30px 40px;
  }
`;

export const PortfolioGridStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
`;
