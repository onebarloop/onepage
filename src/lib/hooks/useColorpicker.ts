import { useEffect, useState, useRef } from "react";

type ColorMap = Record<string, string>;

export function useColorpicker() {
  const [colors, setColors] = useState<ColorMap>({
    "--accent": "",
    "--foreground": "",
    "--background": "",
    "--light": "",
    "--medium": "",
    "--dark": ""
  });
  const firstRender = useRef(true);

  useEffect(() => {
    const root = document.querySelector(":root") as HTMLElement | null;
    if (!root) return;

    if (firstRender.current) {
      const computedStyle = getComputedStyle(root);
      const initialColors: ColorMap = {};
      Object.keys(colors).forEach((colorName) => {
        const value = computedStyle.getPropertyValue(colorName).trim();
        if (value) {
          initialColors[colorName] = value;
        }
      });
      setColors(initialColors);
      firstRender.current = false;
    } else {
      Object.entries(colors).forEach(([name, value]) => {
        root.style.setProperty(name, value);
      });
    }
  }, [colors]);

  const changeColor = (name: string, value: string) => {
    setColors((prev) => ({ ...prev, [name]: value }));
  };

  return { colors, changeColor };
}
