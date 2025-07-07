import { cn } from "../../../libs/cn";
import Container from "../../../Styles";
import { SlEnergy } from "react-icons/sl";
import { CiStar } from "react-icons/ci";
import useGetHotels from "../Hooks/useGetHotels";
import { Link } from "react-router";

const FeatureHotels = () => {
  const { data: Hotels } = useGetHotels();

  return (
    <div className="mt-14">
      <div className={cn(Container)}>
        <h1 className="text-2xl font-bold">Featured Hotels</h1>
        <p>These alluring destinations are picked just for you.</p>

        <div className="grid grid-cols-4  mt-10 ">
          {Hotels?.slice(0, 3)?.map((hotel: any) => (
            <Link
              to={`/hotels/${hotel?.hotel_name}/${hotel.id}`}
              key={hotel.id}
              className="cursor-pointer mb-20 flex flex-col gap-2"
            >
              <div className="overflow-hidden">
                <img
                  src={
                    hotel.image ||
                    "https://phptravels.net/uploads/184028-28-01-2023-1674874284.jpg"
                  }
                  alt={hotel.name || "Hotel"}
                  loading="lazy"
                  className="bg-gray-300 w-60  h-60 object-cover hover:scale-110 transition-all duration-500 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <h1 className="text-xl font-bold">
                      <span className="text-sm">USD</span>{" "}
                      {hotel?.base_price || "N/A"}
                    </h1>
                    <p className="flex items-center gap-1">
                      {" "}
                      / Night <SlEnergy className="text-orange-700" />
                    </p>
                  </div>
                  <div className="mr-9 flex items-center">
                    <CiStar className="text-orange-700" />
                    {hotel.rating}
                  </div>
                </div>
                <div>
                  <h1 className="truncate w-60">
                    {hotel?.hotel_name || "Unnamed Hotel"}
                  </h1>
                </div>
              </div>
            </Link>
          ))}

          <div className="relative w-72 h-72">
            <img
              src="https://phptravels.net/assets/img/featured_hotels.png"
              alt="Discover.png"
              className="bg-gray-300  w-72 h-72 object-cover rounded-lg  hover:scale-110 transition-all duration-500"
            />
            <div className="absolute top-0 w-full h-full bg-gradient-to-b rounded-lg from-transparent to-blue-400"></div>
            <div className="absolute top-36 flex flex-col gap-5">
              <h1 className="text-white text-lg text-center font-bold">
                Discover great deals on hotels around the world
              </h1>
              <Link
                to={"/hotels"}
                className="border-2 text-center cursor-pointer border-white mx-2 py-2 rounded-xl text-white font-bold"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureHotels;
