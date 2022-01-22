import React from "react";
import { Headline } from "../Headline/Headline";
import { HeaderProps } from "./Header.interface";

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <header data-component-type="Header">
      <Headline titleTag="h1" titleText={title} text={subtitle} alignment="center" fontSize="xl" />
    </header>
  );
};
