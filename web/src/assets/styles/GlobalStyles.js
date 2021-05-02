import styled from "styled-components";

export const PageWrapperStyles = styled.div`
  background: var(--lightSecondary);
  color: var(--darkPrimary);
  border-radius: 20px;
  padding: 50px 40px;
  margin: -60px auto 50px;
  @media (min-width: 769px) {
    max-width: 100%;
    border-radius: 40px;
    padding: 50px 80px;
  }
`;

export const ContainerStyles = styled.div`
  position: relative;
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
`;

export const FooterStyles = styled.footer`
  width: 100%;
  background: var(--lightSecondary);
  padding: 40px 0;
  color: var(--darkPrimary);
  border-top: 1px solid var(--lightSecondary);
  box-shadow: 0px 8px 10px 10px var(--lightSecondary);
`;
