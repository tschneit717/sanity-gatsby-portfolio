import { PropsWithChildren } from "react";

export interface PageProps extends PropsWithChildren<any> {
  title: string;
  testId?: string;
}
