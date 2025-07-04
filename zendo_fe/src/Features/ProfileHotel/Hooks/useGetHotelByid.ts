import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { hotelService } from "../../../Api/Hotels/HotelService";

const useGetHotelByid = () => {
  const { hotel_id } = useParams();
  const { data: hotelById } = useQuery({
    queryKey: ["hotels", hotel_id],
    queryFn: () => hotelService.getHotelById(hotel_id),
  });

  return { hotelById };
};
export default useGetHotelByid;
