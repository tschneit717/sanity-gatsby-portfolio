import { PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren<any> {
  text?: string;
  buttonFunction?: Function;
  label?: string;
  bgColor?: string;
  border?: boolean;
  textColor?: string;
  id?: string;
  testId?: string;
}
