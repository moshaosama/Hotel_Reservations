import type { ReactElement } from "react";

const HeroPages = ({
  ImageSrc,
  Title,
  Component,
}: {
  ImageSrc: string;
  Title: string;
  Component: ReactElement;
}) => {
  return (
    <>
      <div className="trelative">
        <img
          src={ImageSrc}
          alt="hero.png"
          className="w-full h-[30pc] object-cover rounded-b-[10pc]"
        />
        <div className="absolute top-40 flex flex-col items-center w-full justify-center max-sm:hidden">
          <h1 className="text-white text-4xl font-bold">{Title}</h1>
          {Component}
        </div>
      </div>
    </>
  );
};

export default HeroPages;
