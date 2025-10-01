import { useColorpicker } from "../lib/hooks/useColorpicker";

export default function Colorpicker() {
  const { colors, changeColor } = useColorpicker();

  return (
    <div className="fixed right-4 bottom-4">
      {Object.entries(colors).map(
        ([name, value]) =>
          value && (
            <input
              key={name}
              type="color"
              value={value}
              onChange={(e) => changeColor(name, e.target.value)}
            />
          ),
      )}
    </div>
  );
}
    