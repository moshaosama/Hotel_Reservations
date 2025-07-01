import { FaSearch } from "react-icons/fa";
import { useGetCities } from "../Hooks/useGetCities";

export const FindHotel = () => {
  const { data, isLoading } = useGetCities();

  return (
    <div className="bg-white p-5 rounded-xl text-black mt-9">
      <form action="" className="flex gap-5 items-center">
        <select
          name="City"
          className="border-1 border-gray-300  hover:bg-gray-200 transition-all duration-300 rounded-xl w-96 p-5 cursor-pointer"
        >
          <option value="">Search By City</option>
          {isLoading && (
            <h1 className="text-center text-2xl font-bold">Loading...</h1>
          )}
          {data?.map((el: { hotel_name: string }) => (
            <option key={el.hotel_name} value={el.hotel_name}>
              {el.hotel_name}
            </option>
          ))}
        </select>

        <input
          type="date"
          className="border-1 border-gray-300 rounded-xl  hover:bg-gray-200 transition-all duration-300  p-5 cursor-pointer"
        />

        <input
          type="date"
          className="border-1 border-gray-300 rounded-xl  hover:bg-gray-200 transition-all duration-300  p-5 cursor-pointer"
        />

        <button className="bg-blue-500 hover:bg-blue-700 transition-all duration-300 border-1 border-gray-300 cursor-pointer rounded-xl w-28 flex justify-center p-6">
          <FaSearch color="white" />
        </button>
      </form>
    </div>
  );
};
