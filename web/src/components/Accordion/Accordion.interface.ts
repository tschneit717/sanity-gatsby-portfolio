import { PropsWithChildren } from "react";

export interface AccordionProps extends PropsWithChildren<any> {
  title: string;
  body?: string;
  testid?: string;
  accordionTestId?: string;
}
