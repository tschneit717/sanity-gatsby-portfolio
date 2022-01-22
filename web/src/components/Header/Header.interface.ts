import { PropsWithChildren } from "react";

export interface HeaderProps extends PropsWithChildren<any> {
  title: string;
  subtitle: string;
}
