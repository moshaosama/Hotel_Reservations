import { MdOutlineDateRange } from "react-icons/md";
import { cn } from "../../../libs/cn";
import Container from "../../../Styles";
import useGetHotelByid from "../Hooks/useGetHotelByid";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router";

const DetailsHotel = () => {
  const { hotelById } = useGetHotelByid();
  return (
    <>
      <div className={cn(Container, "bg-white p-4 flex flex-col gap-1")}>
        <h1 className="text-2xl font-bold">{hotelById?.hotel_name}</h1>
        <div className="flex items-center gap-1 text-lg">
          <CiLocationOn />
          <p>
            Khalid Bin Al Waleed Rd - Bur Dubai - Al Hamriya - Dubai - United
            Arab Emirates, Dubai, United A
          </p>
        </div>

        <div className="mt-5 flex gap-3">
          <div>
            <img
              src="https://phptravels.net/uploads/184028-28-01-2023-1674874284.jpg"
              alt="Hotel.png"
              className="w-[55pc] rounded-xl h-[25pc] object-cover"
            />
          </div>

          <div className="border-1 border-gray-200 rounded-lg w-96 p-4 flex flex-col justify-between">
            <div className="flex justify-between gap-3">
              <div className="border-1 border-gray-200 rounded-lg p-2 w-1/2">
                <div className="flex items-center gap-1 text-sm">
                  <MdOutlineDateRange />
                  <h1>Checkin</h1>
                </div>
                <h1 className="text-md font-bold">{hotelById?.checkIn}</h1>
              </div>

              <div className="border-1 border-gray-200 rounded-lg p-2 w-1/2">
                <div className="flex items-center gap-1 text-sm">
                  <MdOutlineDateRange />
                  <h1>CheckOut</h1>
                </div>

                <h1 className="text-md font-bold">{hotelById?.checkOut}</h1>
              </div>
            </div>

            <div>
              <Link to={""}>View Map</Link>
            </div>

            <div>
              <button className="bg-blue-500 w-full py-3 hover:bg-blue-600 transition-all duration-200 rounded-xl text-white text-xl cursor-pointer font-bold">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsHotel;
