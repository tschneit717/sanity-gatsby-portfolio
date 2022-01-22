import { PropsWithChildren } from "react";

export interface HeadlineProps extends PropsWithChildren<any> {
  titleText: string;
  text: string;
  alignment: string;
  titleTag: string;
  fontSize: string;
  testid?: string;
}
