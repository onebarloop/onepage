import { type AstroComponentFactory } from "astro/runtime/server/index.js";
import Hero from "../components/sections/Hero.astro";
import AboutMe from "../components/sections/AboutMe.astro";
import OtherSection from "../components/sections/OtherSection.astro";

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
    id: "about-me",
    label: "Navigation Item 2",
    component: AboutMe,
    backgroundColor: "bg-primary-light",
  },
  {
    id: "other-section",
    label: "Navigation Item 3",
    component: OtherSection,
  },
];
