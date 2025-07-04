import { Link } from "react-router";
import PathName from "../../Components/PathName";
import useGetHotelByid from "../../Features/ProfileHotel/Hooks/useGetHotelByid";
import DetailsHotel from "../../Features/ProfileHotel/Compoennts/DetailsHotel";
import ShowMap from "../../Features/ProfileHotel/Compoennts/ShowMap";

const ProfileHotel = () => {
  const { hotelById } = useGetHotelByid();

  return (
    <>
      <PathName>
        <>
          <div className="text-gray-500 font-semibold text-md flex gap-2">
            <Link to={"/"}>Mosha</Link>
            <span>/</span>
            <Link to={"/hotels"}>Hotels</Link>
            <span>/</span>
            <span>{hotelById?.hotel_name}</span>
          </div>
        </>
      </PathName>
      <DetailsHotel />
      <ShowMap />
    </>
  );
};

export default ProfileHotel;
