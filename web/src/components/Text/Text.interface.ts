import { PropsWithChildren } from "react";

export interface TextProps {
  text: string;
  textTag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}
