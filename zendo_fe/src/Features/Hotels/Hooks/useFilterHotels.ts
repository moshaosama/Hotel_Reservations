import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { hotelService } from "../../../Api/Hotels/HotelService";
import { useNavigate, useParams } from "react-router";
import { historyService } from "../../../Api/History/HistoryService";
const useFilterHotels = () => {
  const { register, handleSubmit } = useForm();
  const { hotel_name } = useParams();
  const Navigate = useNavigate();
  const { data: hotelByName, isLoading } = useQuery({
    queryKey: ["hotelByCity", hotel_name],
    queryFn: () => hotelService.getHotelByCity(hotel_name as string),
    enabled: !!hotel_name,
  });
  const handleFilterationHotel = async (data?: any) => {
    Navigate(`/hotels/${data?.hotel_name}`);
    await historyService.CreateHistory({
      pathName: "Hotels",
      hotel_name: data?.hotel_name,
      checkIn: "2025-01-02",
      checkOut: "2025-01-29",
    });
  };

  return {
    register,
    handleFilterationHotel,
    handleSubmit,
    hotelByName,
    isLoading,
  };
};

export default useFilterHotels;
