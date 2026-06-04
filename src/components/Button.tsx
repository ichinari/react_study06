type Props = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  color?: "blue" | "gray";
  useBorder?: boolean;
  selected?: boolean;
  isDisabled?: boolean;
  optionalClass?: string | null;
};

const COLOR_CLASSES = {
  blue: {
    default: "border-blue-600 bg-blue-500 hover:bg-blue-700",
    selected: "border-blue-800 bg-blue-700",
  },
  gray: {
    default: "border-gray-600 bg-gray-500 hover:bg-gray-700",
    selected: "border-gray-800 bg-gray-700",
  },
} as const;

export default function Button({
  children,
  type = "button",
  onClick = () => {},
  color,
  useBorder = true,
  selected = false,
  isDisabled = false,
  optionalClass = null,
}: Props) {
  const colorClass = COLOR_CLASSES[color ?? "blue"][selected ? "selected" : "default"];
  const defaultClass = `p-2 cursor-pointer ${useBorder ? "border rounded-2xl" : ""} ${colorClass} ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`;
  return (
    <button
      type={type}
      onClick={onClick}
      className={optionalClass ?? defaultClass}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
