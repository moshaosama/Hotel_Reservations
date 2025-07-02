import { MoonLoader } from "react-spinners";

const Loading = () => {
  return (
    <>
      <div className="bg-[#fbfbfb9e] text-black flex  justify-center items-center fixed top-0 left-0 w-full h-full">
        <MoonLoader color="#2b7fff" />
      </div>
    </>
  );
};

export default Loading;
