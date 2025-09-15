import { useState } from "react";
import { AnimatePresence, motion, stagger, type Variants } from "motion/react";

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => {
    setNavOpen(!navOpen);
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
      <AnimatePresence>
        {!navOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1.0 }}
            exit={{ scale: 0 }}
            onClick={handleClick}
            className="absolute top-8 left-8"
          >
            Menu
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {navOpen && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="nav absolute h-screen w-auto overflow-hidden py-4"
          >
            <nav className="h-full overflow-hidden bg-fuchsia-300">
              <div className="flex justify-end">
                <button className="p-4" onClick={handleClick}>
                  X
                </button>
              </div>
              <ul className="text-2xl">
                <motion.li variants={item}>
                  <a className="p-4 text-nowrap" href="#1">
                    Navigation Item 1
                  </a>
                </motion.li>
                <motion.li variants={item}>
                  <a className="p-4 text-nowrap" href="#2">
                    Navigation Item 2
                  </a>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
