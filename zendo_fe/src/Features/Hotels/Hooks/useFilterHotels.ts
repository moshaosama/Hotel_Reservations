import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { hotelService } from "../../../Api/Hotels/HotelService";
import { useState } from "react";
const useFilterHotels = () => {
  const { register, handleSubmit } = useForm();
  const [hotel_name, setHotelName] = useState<string>("");
  const { data: hotelByName } = useQuery({
    queryKey: ["hotelByCity", hotel_name],
    queryFn: () => hotelService.getHotelByCity(hotel_name),
    enabled: !!hotel_name,
  });
  const handleFilterationHotel = (data?: any) => {
    setHotelName(data?.hotel_name);
  };

  return { register, handleFilterationHotel, handleSubmit, hotelByName };
};

export default useFilterHotels;
