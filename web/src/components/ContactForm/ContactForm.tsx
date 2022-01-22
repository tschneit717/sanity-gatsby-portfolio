import React from "react";

export const ContactForm = () => {
  return (
    <form>
      <div className="input-field">
        <label htmlFor="name">
          Name
          <input name="name" type="text" />
        </label>
      </div>
      <div className="input-field">
        <label htmlFor="email">
          Email
          <input name="email" type="text" />
        </label>
      </div>
      <div className="input-field">
        <label htmlFor="text">
          Your Message:
          <textarea name="text" />
        </label>
      </div>
      <button type="submit">
        <span className="button-text">Submit →</span>
      </button>
    </form>
  );
};
