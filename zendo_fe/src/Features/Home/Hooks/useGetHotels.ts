import { useQuery } from "@tanstack/react-query";
import { hotelService } from "../../../Api/Hotels/HotelService";

const useGetHotels = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["hotels"],
    queryFn: hotelService.getData,
  });

  return { data, isLoading };
};

export default useGetHotels;
