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
    initialData: [
      {
        id: 802,
        hotel_id: 15239002,
        hotel_name: "Shaza Riyadh",
        SOURCE: "Booking.com",
        price: 978.75,
        base_price: 753.75,
        checkIn: "2025-02-09",
        checkOut: "2025-02-10",
        count: 176,
        rating: 4.5,
        Info: ["Free breakfast available", "Free cancellation"],
        latitude: 24.67592,
        longitude: 46.7792,
      },
      {
        id: 800,
        hotel_id: 24143026,
        hotel_name: "Joudyan Hotel",
        SOURCE: "Booking.com",
        price: 963.75,
        base_price: 840.0,
        checkIn: "2025-02-09",
        checkOut: "2025-02-10",
        count: 317,
        rating: 5.0,
        Info: ["Free breakfast available", "Free cancellation"],
        latitude: 24.71355,
        longitude: 46.675297,
      },
    ],
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
