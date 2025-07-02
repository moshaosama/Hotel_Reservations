import { useQuery } from "@tanstack/react-query";
import { hotelService } from "../../../Api/Hotels/HotelService";

export const useGetCities = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["cities"],
    queryFn: hotelService.getCities,
    initialData: [
      {
        hotel_name: "Rosh Rayhaan by Rotana",
      },
      {
        hotel_name: "Joudyan Hotel",
      },
      {
        hotel_name: "Shaza Riyadh",
      },
      {
        hotel_name: "Carawan Al Fahad Hotel",
      },
      {
        hotel_name: "Continent Al Waha Hotel",
      },
    ],
  });

  return { data, isLoading };
};
