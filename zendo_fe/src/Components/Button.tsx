import { cn } from "../libs/cn";

const Button = ({
  color,
  bGround,
  Title,
  isDisable = false,
}: {
  color: string;
  bGround: string;
  Title: string;
  isDisable?: boolean;
}) => {
  return (
    <>
      <button
        disabled={isDisable}
        className={cn(
          "block py-3 rounded-xl  text-lg mt-4 font-semibold hover:bg-black hover:text-white",
          isDisable ? "cursor-not-allowed" : "cursor-pointer"
        )}
        style={{
          color: color,
          backgroundColor: bGround,
          border: `1px solid ${color}`,
        }}
      >
        {Title}
      </button>
    </>
  );
};

export default Button;
