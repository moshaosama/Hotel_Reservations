import { CiStar } from "react-icons/ci";
import useFilterHotels from "../../Hotels/Hooks/useFilterHotels";
import { ClimbingBoxLoader } from "react-spinners";
import { Link } from "react-router";

const DisplayData = () => {
  const { hotelByName, isLoading } = useFilterHotels();

  return (
    <>
      <div className="flex flex-col gap-3">
        {isLoading ? (
          <div className="flex justify-center mx-96 mt-40">
            <ClimbingBoxLoader size={30} />
          </div>
        ) : null}
        {!isLoading &&
          hotelByName?.map((hotel: any) => (
            <div
              key={hotel?.id}
              className="border-2 border-gray-200 flex items-center gap-7 w-[50pc] rounded-lg"
            >
              <img
                src="https://photos.hotelbeds.com/giata/05/059245/059245a_hb_r_009.jpg"
                alt="Hotel.png"
                className="rounded-l-lg w-80"
              />
              <div className="w-full flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <h1 className="text-xl font-bold">{hotel?.hotel_name}</h1>

                  <div className="flex justify-between mr-7">
                    <h1 className="text-sm font-semibold text-blue-500">
                      <span className="text-sm font-bold text-black">
                        checkIn:{" "}
                      </span>{" "}
                      {hotel?.checkIn}
                    </h1>
                    <h1 className="text-sm font-semibold text-blue-500">
                      {" "}
                      <span className="text-sm font-bold text-black">
                        checkOut:{" "}
                      </span>
                      {hotel?.checkOut}
                    </h1>
                  </div>
                </div>

                <div className="flex justify-between w-full">
                  <div className="flex ">
                    {Array.from({ length: hotel?.rating }).map((_, i) => (
                      <CiStar color="orange" key={i} />
                    ))}
                  </div>
                  <div className="mr-7">
                    <h1>
                      USD{" "}
                      <span className="text-xl font-bold">
                        {hotel?.base_price}
                      </span>
                    </h1>
                  </div>
                </div>

                <div className="flex justify-between w-full">
                  <div className="bg-[#e1effd] w-32 flex justify-center items-center rounded-xl font-semibold py-1">
                    <h1>Rating {hotel?.rating}/5</h1>
                  </div>
                  <Link
                    to={`/hotels/${hotel?.hotel_name}/${hotel.id}`}
                    className="mr-7 bg-blue-500 w-32 flex justify-center font-bold text-white hover:bg-blue-700 rounded-full cursor-pointer"
                  >
                    <button className="cursor-pointer py-2">View More</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default DisplayData;
