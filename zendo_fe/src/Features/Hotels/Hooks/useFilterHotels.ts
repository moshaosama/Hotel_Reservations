import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { hotelService } from "../../../Api/Hotels/HotelService";
import { useNavigate, useParams } from "react-router";
const useFilterHotels = () => {
  const { register, handleSubmit } = useForm();
  const { hotel_name } = useParams();
  const Navigate = useNavigate();
  const { data: hotelByName, isLoading } = useQuery({
    queryKey: ["hotelByCity", hotel_name],
    queryFn: () => hotelService.getHotelByCity(hotel_name as string),
    enabled: !!hotel_name,
  });
  const handleFilterationHotel = (data?: any) => {
    Navigate(`/hotels/${data?.hotel_name}`);
  };

  return { register, handleFilterationHotel, handleSubmit, hotelByName, isLoading };
};

export default useFilterHotels;
