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
          className="w-full"
        />
        <div className="bg-gradient-to-r from-[#000000c5] to-[#00000075] absolute top-0 left-0 w-full h-full"></div>

        <div className="absolute top-0  text-white flex flex-col justify-center items-center gap-3 w-full mt-14">
          <h1 className="text-5xl font-bold">Your Trip Starts Here!</h1>
          <p className="text-xl">
            Let us help you plan your next journey — the one that will leave a
            lifetime of memories.
          </p>

          <div className=" bg-[#ffffff0d] border-2 mt-7 border-[#ffffff21] text-white font-bold text-lg rounded-full">
            <div className="flex gap-5 p-[0.4pc] px-5">
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
