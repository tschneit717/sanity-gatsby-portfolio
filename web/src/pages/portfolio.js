import { graphql } from "gatsby";
import * as React from "react";
import { PageWrapperStyles } from "./../assets/styles/GlobalStyles";
import ContentWrapper from "./../components/ContentWrapper";
import Header from "./../components/Header";
import Portfolio from "./../components/Portfolio";

export default function PortfolioPage({ data }) {
  const portfolioItems = data.portfolioItems.nodes;
  const mainText = "Behold - My Stuff";
  const subText = "Here's some things I've written a commit message for";
  return (
    <>
      <Header mainText={mainText} subText={subText} color="purple" />
      <ContentWrapper>
        <PageWrapperStyles>
          <Portfolio portfolioItems={portfolioItems} />
        </PageWrapperStyles>
      </ContentWrapper>
    </>
  );
}

export const query = graphql`
  query MyQuery {
    portfolioItems: allSanityPortfolioItem {
      nodes {
        title
        slug {
          current
        }
        mainImage {
          asset {
            gatsbyImageData(placeholder: BLURRED, formats: JPG)
          }
        }
        excerpt {
          children {
            text
          }
        }
        file {
          _key
          _type
          _rawAsset
        }
      }
    }
  }
`;
