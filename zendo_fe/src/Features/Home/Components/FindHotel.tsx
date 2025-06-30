import { FaSearch } from "react-icons/fa";

export const FindHotel = () => {
  return (
    <div className="bg-white p-5 rounded-xl text-black mt-9">
      <form action="" className="flex gap-5 items-center">
        <select
          name="City"
          className="border-1 border-gray-300 rounded-xl w-96 p-5 cursor-pointer"
        >
          <option value="" selected>
            Search By City
          </option>
        </select>

        <input
          type="date"
          className="border-1 border-gray-300 rounded-xl  p-5 cursor-pointer"
        />

        <input
          type="date"
          className="border-1 border-gray-300 rounded-xl  p-5 cursor-pointer"
        />

        <button className="bg-blue-500 border-1 border-gray-300 cursor-pointer rounded-xl w-28 flex justify-center p-6">
          <FaSearch color="white" />
        </button>
      </form>
    </div>
  );
};
