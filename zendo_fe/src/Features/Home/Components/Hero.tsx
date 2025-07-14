import type { ReactElement } from "react";
import { NavbarLinks } from "../../../Data/NavbarLinks";
import useSetActive from "../../../Hooks/UseSetActive";
import { cn } from "../../../libs/cn";
import { FindHotel } from "../../Hotels/Components/FindHotel";

const Hero = () => {
  const { handleSetActive } = useSetActive();
  return (
    <>
      <div className="relative">
        <img
          src="https://phptravels.net/uploads/global/bg.png"
          alt="hero.png"
          className="w-full max-sm:h-[16pc]"
        />
        <div className="bg-gradient-to-r from-[#000000c5] to-[#00000075] absolute top-0 left-0 w-full h-full"></div>

        <div className="absolute top-0  text-white flex flex-col justify-center items-center gap-3 w-full mt-14 max-sm:mt-3 max-sm:overflow-hidden">
          <div className="flex justify-center flex-col items-center gap-3 max-sm:hidden">
            <h1 className="text-5xl font-bold">Your Trip Starts Here!</h1>
            <p className="text-xl">
              Let us help you plan your next journey — the one that will leave a
              lifetime of memories.
            </p>
          </div>

          <div className=" bg-[#ffffff0d] border-2 mt-7 max-sm:mt-0 border-[#ffffff21] text-white font-bold text-lg rounded-full max-sm:rounded-xl">
            <div className="grid grid-cols-5 max-sm:grid-cols-2 gap-5 p-[0.4pc] px-5 max-sm:w-[24pc]">
              {NavbarLinks.slice(0, 5)?.map(
                (link: { name: string; icon: ReactElement }) => (
                  <div
                    key={link.name}
                    className={cn(
                      "flex items-center gap-3 p-4 cursor-pointer",
                      link.name === "Hotels" ? "Active" : ""
                    )}
                    onClick={handleSetActive}
                  >
                    <i>{link.icon}</i>
                    <h1>{link.name}</h1>
                  </div>
                )
              )}
            </div>
          </div>

          <div>
            <FindHotel />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
