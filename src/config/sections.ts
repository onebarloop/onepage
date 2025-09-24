import { type AstroComponentFactory } from "astro/runtime/server/index.js";
import Hero from "../components/sections/Hero.astro";
import Section from "../components/sections/Section.astro";

export type SectionConfig = {
  id: string;
  label: string;
  component: AstroComponentFactory;
  backgroundColor?: string;
};

export const SECTIONS: SectionConfig[] = [
  {
    id: "hero",
    label: "Navigation Item 1",
    component: Hero,
  },
  {
    id: "section1",
    label: "Navigation Item 2",
    component: Section,
    backgroundColor: "bg-primary-light",
  },
  {
    id: "section2",
    label: "Navigation Item 3",
    component: Section,
  },
];
