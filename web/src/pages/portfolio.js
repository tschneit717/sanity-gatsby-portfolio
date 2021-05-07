import { graphql } from "gatsby";
import * as React from "react";
import PortfolioPopUpItem from "../components/portfolio/PortfolioPopUpItem";
import { PageWrapperStyles } from "./../assets/styles/GlobalStyles";
import ContentWrapper from "./../components/structure/ContentWrapper";
import Header from "./../components/structure/Header";
import Portfolio from "../components/portfolio/Portfolio";

export default function PortfolioPage({ data }) {
  const [state, setState] = React.useState({});
  const portfolioItems = data.portfolioItems.nodes;
  const mainText = "Behold - My Stuff";
  const subText = "Here's some things I've written a commit message for";
  return (
    <>
      <Header mainText={mainText} subText={subText} color="purple" />
      <ContentWrapper>
        <PageWrapperStyles>
          <Portfolio portfolioItems={portfolioItems} />
          <PortfolioPopUpItem item={state.item}></PortfolioPopUpItem>
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
