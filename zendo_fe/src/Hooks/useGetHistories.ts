import { useQuery } from "@tanstack/react-query";
import { historyService } from "../Api/History/HistoryService";

const useGetHistories = () => {
  const { data: History } = useQuery({
    queryKey: ["history"],
    queryFn: historyService.getData,
  });

  return { History };
};

export default useGetHistories;
