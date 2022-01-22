import React, { FunctionComponent } from "react";
import { FooterProps } from "./Footer.interface";

export const Footer: FunctionComponent<FooterProps> = (props: FooterProps) => {
  return (
    <footer data-component-type="Footer" className="">
      <div
        data-testid="footer--grid-column-wrapper"
        className={`grid grid-cols-${props.gridCount}`}
      >
        {props.children}
      </div>
    </footer>
  );
};
