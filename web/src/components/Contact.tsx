import React from "react";
import styled from "styled-components";
import { FormStyles } from "../assets/styles/components/ContactStyles";

class ContactForm extends React.Component {
  nameRef = React.createRef();
  emailRef = React.createRef();
  textRef = React.createRef();
  theElliot = React.createRef();

  constructor(props) {
    super(props);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmitForm(event) {
    event.preventDefault();
    const message = {
      name: this.nameRef.current.value,
      email: this.emailRef.current.value,
      text: this.textRef.current.value,
      theElliot: this.theElliot.current.value,
    };
    this.props.sendMessage(message);
  }
  render() {
    return (
      <FormStyles onSubmit={(event) => this.handleSubmitForm(event)}>
        <div className="input-field">
          <label htmlFor="name">
            Name
            <input name="name" type="text" ref={this.nameRef} />
          </label>
        </div>
        <div className="input-field">
          <label htmlFor="email">
            Email
            <input name="email" type="text" ref={this.emailRef} />
          </label>
        </div>
        <div className="input-field">
          <label htmlFor="text">
            Your Message:
            <textarea name="text" ref={this.textRef} />
          </label>
        </div>
        <div className="input-field">
          <label htmlFor="theElliot">
            Email
            <input name="theElliot" type="text" ref={this.theElliot} />
          </label>
        </div>
        <button type="submit">
          <span className="button-text">Submit →</span>
        </button>
      </FormStyles>
    );
  }
}

export default ContactForm;
