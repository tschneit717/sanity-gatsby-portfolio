import * as React from "react";
import { PageWrapperStyles } from "./../assets/styles/GlobalStyles";
import ContentWrapper from "./../components/ContentWrapper";
import Header from "./../components/Header";
import ContactForm from "./../components/Contact";

function sendMessage(message) {
  console.log(message);
}

const ContactPage = () => {
  const mainText = "Hello, I'm Tom";
  const subText = "I'm a full-stack developer.";
  return (
    <>
      <Header mainText={mainText} subText={subText} color="blue" />
      <ContentWrapper>
        <PageWrapperStyles>
          <ContactForm sendMessage={sendMessage}></ContactForm>
        </PageWrapperStyles>
      </ContentWrapper>
    </>
  );
};
export default ContactPage;
