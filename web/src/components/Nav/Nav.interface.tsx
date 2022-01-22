interface NavItem {
  link: string;
  name: string;
}

export interface NavProps {
  navItems: NavItem[];
  testid?: string;
}
