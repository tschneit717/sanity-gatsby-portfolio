import React from "react";
import styled from "styled-components";
import ContentWrapper from "./ContentWrapper";
import { FooterStyles } from "../../assets/styles/GlobalStyles";

export default function Footer(props) {
  return (
    <FooterStyles>
      <ContentWrapper>
        <div className="flex justify-evenly">
          <div>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
          </div>
          <div>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
          </div>
          <div>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
          </div>
        </div>
      </ContentWrapper>
    </FooterStyles>
  );
}
