import React from "react";
import { FunctionComponent } from "react";
import { Container } from "../Container/Container";
import { PageProps } from "./Page.interface";

export const Page: FunctionComponent<PageProps> = ({ children, testId }: PageProps) => {
  return (
    <main data-testid={testId} data-component-type="Page">
      <Container>{children}</Container>
    </main>
  );
};
