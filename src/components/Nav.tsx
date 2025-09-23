import { useState } from "react";
import { AnimatePresence, motion, stagger, type Variants } from "motion/react";
import { navItems } from "../config/nav-items";
import { useObserver } from "../lib/hooks/useObserver";

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  const { activeSection } = useObserver(navItems);

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
      transition: {
        delay: 0.2,
        delayChildren: stagger(0.1),
      },
    },
    show: {
      width: "auto",
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
        <motion.div
          variants={container}
          animate={navOpen ? "show" : "hidden"}
          className="nav absolute h-screen w-auto overflow-hidden py-4"
        >
          <nav className="h-full overflow-hidden bg-fuchsia-300">
            <div className="flex justify-end">
              <button className="p-4" onClick={handleClick}>
                X
              </button>
            </div>
            <ul className="space-y-4 text-2xl">
              {Object.entries(navItems).map(([_key, navItem], i) => (
                <motion.li
                  key={i}
                  variants={item}
                  className={
                    activeSection === navItem.id ? "bg-fuchsia-500" : ""
                  }
                >
                  <a className="p-4 text-nowrap" href={`#${navItem.id}`}>
                    {navItem.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
