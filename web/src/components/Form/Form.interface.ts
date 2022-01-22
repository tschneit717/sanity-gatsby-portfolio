import { PropsWithChildren } from "react";
import { InputFieldProps } from "../InputField/InputField.interface";

export interface FormProps extends InputFieldProps, PropsWithChildren<any> {
  inputFields: InputFieldProps[];
  testId?: string;
  submitForm: (arg0: any) => void;
}
