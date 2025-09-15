export type Sections = "hero" | "section1" | "section2";

export type NavItem = {
  label: string;
  id: string;
};

export type Nav = Record<Sections, NavItem>;

export const navItems: Nav = {
  hero: { label: "Navigation Item 1", id: "1" },
  section1: { label: "Navigation Item 2", id: "2" },
  section2: { label: "Navigation Item 3", id: "3" },
};
