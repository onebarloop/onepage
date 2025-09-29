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
    hidden: { scale: 0 },
    show: { scale: 1.0, transition: { delay: 0.4 } },
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
          className="absolute top-8 left-8"
        >
          Menu
        </motion.button>
      </AnimatePresence>
      <AnimatePresence initial={false}>
        <div className="nav absolute h-screen w-auto py-8">
          <motion.nav
            variants={container}
            animate={navOpen ? "show" : "hidden"}
            className="bg-primary drop-shadow-l h-full overflow-hidden"
          >
            <div className="flex justify-end">
              <button className="p-4 text-xl font-black" onClick={handleClick}>
                X
              </button>
            </div>
            <ul className="text-l space-y-4 pr-5 pl-4">
              {SECTIONS.map(({ id, label }) => (
                <motion.li key={id} variants={item}>
                  <a
                    className={cn(
                      `drop-shadow-s block rounded-full border-2 p-4 text-nowrap transition-all hover:translate-x-1 hover:translate-y-1 hover:drop-shadow-xs`,
                      activeSection === id ? "bg-accent" : "bg-primary-light",
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
