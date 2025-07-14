import { FaSearch } from "react-icons/fa";
import { useGetCities } from "../Hooks/useGetCities";
import useFilterHotels from "../Hooks/useFilterHotels";
import { cn } from "../../../libs/cn";

export const FindHotel = () => {
  const { data, isLoading } = useGetCities();
  const { handleFilterationHotel, handleSubmit, register } = useFilterHotels();

  return (
    <div className={cn("bg-white p-5 max-sm:p-0 rounded-xl text-black mt-9")}>
      <form
        onSubmit={handleSubmit(handleFilterationHotel)}
        className="flex gap-5 items-center w-full max-sm:flex-col"
      >
        <p>
          <select
            className="border-1 border-gray-300  hover:bg-gray-200 transition-all duration-300 rounded-xl w-96 p-5 cursor-pointer"
            {...register("hotel_name", { required: "hotel_name is required" })}
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
        </p>

        <input
          type="date"
          className="border-1 max-sm:w-full border-gray-300 rounded-xl  hover:bg-gray-200 transition-all duration-300  p-5 cursor-pointer"
        />

        <input
          type="date"
          className="border-1 border-gray-300 max-sm:w-full  rounded-xl  hover:bg-gray-200 transition-all duration-300  p-5 cursor-pointer"
        />

        <button className="bg-blue-500 max-sm:w-full hover:bg-blue-700 transition-all duration-300 border-1 border-gray-300 cursor-pointer rounded-xl w-28 flex justify-center p-6">
          <FaSearch color="white" />
        </button>
      </form>
    </div>
  );
};
