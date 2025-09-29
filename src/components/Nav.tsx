import { useState } from "react";
import { AnimatePresence, motion, stagger, type Variants } from "motion/react";
import { SECTIONS } from "../config/sections"; // <-- Use unified data
import { useObserver } from "../lib/hooks/useObserver";
import { cn } from "../lib/utils/cn";

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  const { activeSection } = useObserver();

  const handleClick = () => {
    setNavOpen(!navOpen);
  };

  const button: Variants = {
    hidden: { left: -120 },
    show: { left: -12, transition: { delay: 0.4 } },
  };

  const container: Variants = {
    hidden: {
      width: 0,
      borderRight: "0px solid var(--color-foreground)",
      borderTop: "0px solid var(--color-foreground)",
      borderBottom: "0px solid var(--color-foreground)",
      transition: {
        delay: 0.2,
        delayChildren: stagger(0.1),
      },
    },
    show: {
      width: "auto",
      borderRight: "3px solid var(--color-foreground)",
      borderTop: "3px solid var(--color-foreground)",
      borderBottom: "3px solid var(--color-foreground)",
      transition: {
        delay: 0.2,
        delayChildren: stagger(0.15),
      },
    },
  };

  const item: Variants = {
    hidden: { x: -500 },
    show: { x: 0, transition: { type: "spring", bounce: 0.4 } },
  };

  return (
    <>
      <AnimatePresence initial={false}>
        <motion.button
          variants={button}
          animate={navOpen ? "hidden" : "show"}
          onClick={handleClick}
          className="bg-primary absolute top-8 cursor-pointer rounded-r-full p-4 pl-6 drop-shadow-xs transition-[padding] hover:pl-10"
        >
          Menu
        </motion.button>
      </AnimatePresence>
      <AnimatePresence initial={false}>
        <div className="nav absolute h-screen w-auto py-8">
          <motion.nav
            variants={container}
            animate={navOpen ? "show" : "hidden"}
            className="bg-primary drop-shadow-l h-full space-y-4 overflow-hidden"
          >
            <div className="flex justify-end">
              <button
                className="font-vt aspect-square w-10 cursor-pointer border-b-3 border-l-3 p-2 text-2xl font-black"
                onClick={handleClick}
              >
                X
              </button>
            </div>
            <ul className="text-l space-y-4 pr-5 pl-4">
              {SECTIONS.map(({ id, label }) => (
                <motion.li key={id} variants={item}>
                  <a
                    className={cn(
                      `block rounded-full border-2 p-4 text-nowrap transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:drop-shadow-none`,
                      activeSection === id
                        ? "bg-accent drop-shadow-s -translate-x-0.5 -translate-y-0.5"
                        : "bg-primary-light drop-shadow-xs",
                    )}
                    href={`#${id}`}
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </div>
      </AnimatePresence>
    </>
  );
}
