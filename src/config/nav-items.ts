export type Sections = "hero" | "section1" | "section2";

export type NavItem = {
  label: string;
  id: string;
};

export type Nav = Record<Sections, NavItem>;

export const NAVIGATION: Nav = {
  hero: { label: "Navigation Item 1", id: "hero" },
  section1: { label: "Navigation Item 2", id: "section1" },
  section2: { label: "Navigation Item 3", id: "section2" },
};
