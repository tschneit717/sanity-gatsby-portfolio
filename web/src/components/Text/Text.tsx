import React, { FunctionComponent } from "react";
import { v4 as uuidv4 } from "uuid";
import { TextProps } from "./Text.interface";

export const Text: FunctionComponent<TextProps> = ({ textTag, text }: TextProps) => {
  const TextWrapper = (textProps: TextProps) => {
    const { textTag: TextType = "p", text: Text } = textProps;
    return (
      <TextType data-component-type="Text" key={uuidv4()}>
        {Text}
      </TextType>
    );
  };
  return <TextWrapper textTag={textTag} text={text}></TextWrapper>;
};
