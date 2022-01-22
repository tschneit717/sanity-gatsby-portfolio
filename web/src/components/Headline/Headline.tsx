import React, { FunctionComponent } from "react";
import { v4 as uuidv4 } from "uuid";
import { HeadlineProps } from "./Headline.interface";

export const Headline: FunctionComponent<HeadlineProps> = ({
  alignment,
  fontSize,
  text,
  titleTag,
  titleText,
  testid,
}: HeadlineProps) => {
  const HeadlineTitle = (headlineProps: HeadlineProps["titleTage"]): JSX.Element => {
    const { titleTag: HeadlineTag, children, className } = headlineProps;
    return <HeadlineTag className={className}>{children}</HeadlineTag>;
  };
  return (
    <div
      data-component-type="Headline"
      className={`text-${alignment}`}
      data-testid={testid}
      key={uuidv4()}
    >
      <HeadlineTitle className={`text-${fontSize}`} titleTag={titleTag}>
        {titleText}
      </HeadlineTitle>
      <p>{text}</p>
    </div>
  );
};
