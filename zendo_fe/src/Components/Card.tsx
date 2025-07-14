import type { ReactElement } from "react";

const Card = ({
  Icon,
  Header,
  Description,
}: {
  Icon: ReactElement;
  Header: string;
  Description: string;
}) => {
  return (
    <>
      <div className="border-1 my-20 max-sm:mx-3 border-gray-300 shadow-lg p-3 rounded-xl  flex flex-col gap-6">
        <div className="flex justify-center  text-white">
          <i className="bg-blue-500 p-3 rounded-full text-3xl">{Icon}</i>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-xl font-bold">{Header}</h1>
          <p className="text-gray-600 text-lg text-center">{Description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
