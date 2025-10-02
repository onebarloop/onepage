import { useEffect, useState } from "react";

export function useMenu(
  nav: React.RefObject<HTMLDivElement | null>,
  menuButton: React.RefObject<HTMLButtonElement | null>,
) {
  const [navOpen, setNavOpen] = useState(false);

  const closeNavClick = (e: MouseEvent) => {
    if (
      e.target !== nav.current &&
      e.target !== menuButton.current &&
      !nav.current?.contains(e.target as Node)
    ) {
      setNavOpen(false);
    }
  };

  const closeNavButton = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeNavClick);
    window.addEventListener("keydown", closeNavButton);
    return () => {
      window.removeEventListener("click", closeNavClick);
      window.removeEventListener("keydown", closeNavButton);
    };
  }, [nav, menuButton]);

  return { navOpen, setNavOpen };
}
