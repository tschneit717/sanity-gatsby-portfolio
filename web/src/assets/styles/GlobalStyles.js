import styled from 'styled-components';

export const PageWrapperStyles = styled.div`
  background: #1d2d50;
  color: white;
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
  background: #1d2d50;
  padding: 40px 0;
  color: white;
  border-top: 1px solid #133b5c;
  box-shadow: 0px 8px 10px 10px #133b5c;
`;
