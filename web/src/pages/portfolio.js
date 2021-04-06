import * as React from "react";
import { PageWrapperStyles } from "./../assets/styles/GlobalStyles";
import ContentWrapper from "./../components/ContentWrapper";
import Header from "./../components/Header";
import Portfolio from "./../components/Portfolio";

const PortfolioPage = () => {
  const mainText = "Hello, I'm Tom";
  const subText = "I'm a full-stack developer.";
  return (
    <>
      <Header mainText={mainText} subText={subText} color="purple" />
      <ContentWrapper>
        <PageWrapperStyles>
          <Portfolio />
        </PageWrapperStyles>
      </ContentWrapper>
    </>
  );
};

export default PortfolioPage;
