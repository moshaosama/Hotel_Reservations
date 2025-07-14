import { cn } from "../libs/cn";

interface ButtonProps {
  color: string;
  bGround: string;
  Title: string;
  disabled?: boolean;
}

const Button = ({ color, bGround, Title, disabled }: ButtonProps) => {
  return (
    <button
      className={cn(
        "block py-3 rounded-xl text-lg mt-4 font-semibold transition-all duration-300",
        disabled
          ? "hover:bg-black hover:text-white cursor-pointer"
          : "cursor-not-allowed opacity-50"
      )}
      style={{
        color: color,
        backgroundColor: bGround,
        border: `1px solid ${color}`,
      }}
    >
      {Title}
    </button>
  );
};

export default Button;
