import { PropsWithChildren } from "react";

export interface InputFieldProps extends PropsWithChildren<any> {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  testId?: string;
  handleChange?: any;
  value?: any;
  isRequired: boolean;
}
