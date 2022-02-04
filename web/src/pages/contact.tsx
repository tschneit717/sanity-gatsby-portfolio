import React from "react";
import { Header } from "../components/Header/Header";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { Container } from "../components/Container/Container";
import { Page } from "../components/Page/Page";

const ContactPage = () => {
  return (
    <Page>
      <Container>
        <ContactForm></ContactForm>
      </Container>
    </Page>
  );
};
export default ContactPage;
