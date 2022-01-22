import React from "react";
import { FunctionComponent } from "react";
import { Container } from "../Container/Container";
import { PageProps } from "./Page.interface";

export const Page: FunctionComponent<PageProps> = ({ title, children, testId }: PageProps) => {
  return (
    <div data-testid={testId} data-component-type="Page">
      <Container>
        <h1>{title}</h1>
      </Container>
      <Container>{children}</Container>
    </div>
  );
};
