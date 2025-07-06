import { useMutation, useQuery } from "@tanstack/react-query";
import { historyService } from "../Api/History/HistoryService";

const useGetHistories = () => {
  const { data: History, refetch } = useQuery({
    queryKey: ["history"],
    queryFn: historyService.getData,
  });

  const { isSuccess: isSuccessDelete, mutate: DeleteAllHistory } = useMutation({
    mutationKey: ["deleteHistory"],
    mutationFn: historyService.DeleteHistories,

    onSuccess: () => {
      refetch();
    },
  });

  return { History, isSuccessDelete, DeleteAllHistory };
};

export default useGetHistories;
