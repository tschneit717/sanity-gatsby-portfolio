import React from 'react';
import styled from 'styled-components';
import { ContainerStyles } from '../assets/styles/GlobalStyles';

const HeaderStyles = styled.div`
  > .hero-wrapper {
    padding: 10px;
    min-height: 400px;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
  }
  h2 {
    font-size: 50px;
  }
  p {
    font-size: 24px;
  }
  h2,
  p {
    color: white;
    margin: 0;
    padding: 0;
  }
`;

export default function Header({ mainText, subText, color }) {
  return (
    <HeaderStyles className={`${color}-gradient`}>
      <ContainerStyles className="hero-wrapper">
        <h2>{mainText}</h2>
        <p>{subText}</p>
      </ContainerStyles>
    </HeaderStyles>
  );
}
