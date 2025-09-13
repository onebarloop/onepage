import { useState } from 'react';
import { AnimatePresence, motion, stagger } from 'motion/react';

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => {
    setNavOpen(!navOpen);
  };
  const container = {
    hidden: {
      width: 0,
      transition: {
        delay: 0.1,
        delayChildren: stagger(0.1),
      },
    },
    show: {
      width: 'auto',
      transition: {
        delayChildren: stagger(0.2),
      },
    },
  };

  const item = {
    hidden: { x: -1000 },
    show: { x: 0 },
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
            className="nav h-screen absolute py-4 w-auto overflow-hidden"
          >
            <nav className="bg-fuchsia-300 h-full overflow-hidden">
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
