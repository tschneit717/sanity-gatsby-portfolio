import React, { FunctionComponent } from "react";
import { v4 as uuidv4 } from "uuid";
import { ContainerProps } from "./Container.interface";

export const Container: FunctionComponent<ContainerProps> = ({
  testid,
  children,
}: ContainerProps) => {
  return (
    <div
      data-component-type="Container"
      key={uuidv4()}
      data-testid={testid}
      className="container block"
    >
      {children}
    </div>
  );
};
