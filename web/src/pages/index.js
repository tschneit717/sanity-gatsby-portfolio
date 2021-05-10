import React from "react";
import { ContentBlock } from "../components/content/ContentBlock";
import { PageWrapperStyles } from "./../assets/styles/GlobalStyles";
import ContentWrapper from "./../components/structure/ContentWrapper";
import Header from "./../components/structure/Header";

const HomePage = () => {
  const mainText = "Hello, I'm Tom";
  const subText = "I'm a full-stack developer.";
  return (
    <>
      <Header mainText={mainText} subText={subText} color="green" />
      <ContentWrapper>
        <PageWrapperStyles>
          <ContentBlock>
            <p>
              I'm currently employed at{" "}
              <a target="_blank" href="https://willowtreeapps.com/">
                WillowTree
              </a>
              as a Software Engineer!
            </p>
            <p>
              Here's some of the different languages I've used out in the wild and know how to use!
            </p>
            <div>
              <p>React</p>
              <p>Vue</p>
              <p>TypeScript</p>
              <p>Node.JS</p>
              <p>MongoDB</p>
              <p>Java</p>
            </div>
          </ContentBlock>
        </PageWrapperStyles>
      </ContentWrapper>
    </>
  );
};

export default HomePage;
