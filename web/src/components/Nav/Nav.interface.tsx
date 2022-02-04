export interface IconTypes {
  "/": "/";
  "/about": "/about";
  "/portfolio": "/portfolio";
  "/hobbies": "/hobbies";
  "/contact": "/contact";
}

interface NavItem {
  link: string;
  name: string;
}

export interface NavProps {
  navItems: NavItem[];
  testid?: string;
}
