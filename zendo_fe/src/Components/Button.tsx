import { cn } from "../libs/cn";

const Button = ({
  color,
  bGround,
  Title,
}: {
  color: string;
  bGround: string;
  Title: string;
}) => {
  return (
    <>
      <button
        className={cn(
          "block py-3 rounded-xl text-lg mt-4 font-semibold hover:bg-black hover:text-white"
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
