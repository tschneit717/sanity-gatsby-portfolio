import * as React from "react";
import { Link } from "gatsby";
import ContentWrapper from "../components/ContentWrapper";
import { PageWrapperStyles } from "../assets/styles/GlobalStyles";
import Header from "../components/Header";

const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

export default function FourOhFourPage() {
  return (
    <>
      <Header mainText={"404"} subText={"Page not found!"} color="green" />
      <ContentWrapper>
        <PageWrapperStyles>
          <p>
            Sorry{" "}
            <span role="img" aria-label="Pensive emoji">
              😔
            </span>{" "}
            we couldn’t find what you were looking for.
            <br />
            {process.env.NODE_ENV === "development" ? (
              <>
                <br />
                Try creating a page in <code style={codeStyles}>src/pages/</code>.
                <br />
              </>
            ) : null}
            <br />
            <Link to="/">Go home</Link>.
          </p>
        </PageWrapperStyles>
      </ContentWrapper>
    </>
  );
}
