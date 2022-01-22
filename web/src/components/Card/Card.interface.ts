import { PropsWithChildren } from "react";

export interface CardProps extends PropsWithChildren<any> {
  text?: string;
  title: string;
  image: string;
  imageAlt?: string;
  testid?: string;
}
