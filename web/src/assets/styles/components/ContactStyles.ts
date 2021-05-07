import styled from "styled-components";

export const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  .input-field {
    position: relative;
    margin: 8px 0;
    display: flex;
    label {
      color: var(--darkPrimary);
      width: 100%;
    }
    input,
    textarea {
      margin-top: 10px;
      background: var(--lightPrimary);
      color: var(--darkPrimary);
      width: calc(100% - 16px);
      border: none;
      padding: 8px;
      border-radius: 10px 10px 0 0;
    }
    &:before {
      border-radius: 0 0 10px 10px;
      content: "";
      display: block;
      position: absolute;
      left: 0px;
      right: 0px;
      bottom: 0px;
      width: 100%;
      height: 2px;
      background: linear-gradient(to right, #b294ff, #57e6e6, #feffb8);
    }
    textarea {
      resize: vertical;
      min-height: 100px;
      &:-webkit-resizer {
        display: none;
      }
    }
  }
  button {
    position: relative;
    margin-top: 10px;
    display: block;
    color: var(--darkPrimary);
    padding: 6px;
    border-radius: 10px;
    width: 100px;
    height: 40px;
    border: none;
    z-index: 10;
    background: linear-gradient(to right, #b294ff, #57e6e6, #feffb8);
    .button-text {
      background: var(--lightPrimary);
      left: 2px;
      top: 2px;
      width: calc(100% - 4px);
      height: calc(100% - 4px);
      border-radius: inherit;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: -1;
      vertical-align: middle;
    }
  }
`;
