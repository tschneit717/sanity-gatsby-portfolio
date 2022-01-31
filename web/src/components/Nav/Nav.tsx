import React from "react";
import { FunctionComponent } from "react";
import { Link } from "gatsby";
import { v4 as uuidv4 } from "uuid";
import { NavProps } from "./Nav.interface";

export const Nav: FunctionComponent<NavProps> = ({ navItems }: NavProps) => {
  return (
    <nav key={uuidv4()}>
      <ul>
        {navItems.map((item) => (
          <li key={uuidv4()}>
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
