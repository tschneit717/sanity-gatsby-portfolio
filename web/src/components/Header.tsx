import React from "react";
import { HeaderStyles } from "./../assets/styles/components/HeaderStyles";
import { ContainerStyles } from "../assets/styles/GlobalStyles";

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
