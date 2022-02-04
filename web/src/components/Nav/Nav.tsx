import React from "react";
import { FunctionComponent } from "react";
import { Link } from "gatsby";
import { v4 as uuidv4 } from "uuid";
import { IconTypes, NavProps } from "./Nav.interface";
import {
  MdMailOutline,
  MdOutlineCode,
  MdOutlineHome,
  MdOutlinePermIdentity,
  MdOutlineGamepad,
} from "react-icons/md";
import "./Nav.scss";

const menuLinks = [
  {
    name: "Home",
    link: "/",
    icon: <MdOutlineHome />,
  },
  {
    name: "About Me",
    link: "/about",
    icon: <MdOutlinePermIdentity />,
  },
  {
    name: "Portfolio",
    link: "/portfolio",
    icon: <MdOutlineCode />,
  },
  {
    name: "Hobbies",
    link: "/hobbies",
    icon: <MdOutlineGamepad />,
  },
  {
    name: "Get In Touch →",
    link: "/contact",
    icon: <MdMailOutline />,
  },
];

export const Nav = () => {
  return (
    <nav className="nav h100 absolute l0 t0 overflow-hidden" key={uuidv4()}>
      <ul className="nav-list m0 px1 flex align-middle flex-column">
        {menuLinks.map((item) => (
          <li className="nav-item" key={uuidv4()}>
            <Link className="flex nowrap" to={item.link}>
              <span className="nav-item__icon">{item.icon}</span>
              <span className="nav-item__title">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
