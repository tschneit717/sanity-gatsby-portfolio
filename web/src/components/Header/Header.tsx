import React from "react";
import { Headline } from "../Headline/Headline";
import { HeaderProps } from "./Header.interface";
import "./Header.scss";

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <header>
      <Headline titleTag="h1" titleText={title} text={subtitle} alignment="center" fontSize="xl" />
    </header>
  );
};
