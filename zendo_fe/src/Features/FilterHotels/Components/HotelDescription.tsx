import { IoIosArrowForward } from "react-icons/io";
import useFilterHotels from "../../Hotels/Hooks/useFilterHotels";

const HotelDescription = () => {
  const { hotelByName, isLoading } = useFilterHotels();

  return (
    <>
      <div className="bg-gradient-to-r from-[#0b66f9] py-5 flex justify-between text-white px-3 rounded-2xl to-[#00245e]">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <div>
              <h1>{hotelByName?.length} Hotels</h1>
            </div>

            <div className="flex items-center gap-4">
              <h1>{hotelByName?.[0]?.hotel_name}</h1>

              <IoIosArrowForward size={20} />
              <h1>{hotelByName?.[0]?.checkIn}</h1>
              <h1>{hotelByName?.[hotelByName?.length - 1]?.checkOut}</h1>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default HotelDescription;
