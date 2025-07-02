import { CiStar } from "react-icons/ci";

const AllStars = () => {
  return (
    <>
      <form action="" className="flex flex-col mx-10 gap-3 mt-4">
        <p className="flex items-center gap-4">
          <input type="radio" id="All Stars" name="stars" value={"All Stars"} />
          <label htmlFor="All Stars" className="text-md font-semibold">
            All Stars
          </label>
        </p>

        <p className="flex items-center gap-4">
          <input type="radio" id="4stars" name="stars" value={"4.5"} />
          <label htmlFor="4stars" className="flex">
            {Array.from({ length: 4 }).map(() => (
              <CiStar />
            ))}
          </label>
        </p>

        <p className="flex items-center gap-4">
          <input type="radio" id="3stars" name="stars" value={"3"} />
          <label htmlFor="3stars" className="flex">
            {Array.from({ length: 3 }).map(() => (
              <CiStar />
            ))}
          </label>
        </p>

        <p className="flex items-center gap-4">
          <input type="radio" id="2stars" name="stars" value={"2"} />
          <label htmlFor="2stars" className="flex">
            {Array.from({ length: 2 }).map(() => (
              <CiStar />
            ))}
          </label>
        </p>

        <p className="flex items-center gap-4">
          <input type="radio" id="1stars" name="stars" value={"1"} />
          <label htmlFor="1stars" className="flex">
            {Array.from({ length: 1 }).map(() => (
              <CiStar />
            ))}
          </label>
        </p>
      </form>
    </>
  );
};

export default AllStars;
