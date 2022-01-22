import { PropsWithChildren } from "react";

export interface FooterProps extends PropsWithChildren<any> {
  text: string;
  gridCount: number;
  children: any;
}
