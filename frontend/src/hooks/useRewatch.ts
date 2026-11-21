import { useQuery } from "@tanstack/react-query";
import { getRewatchOrder } from "@/services/rewatch.service";

const useRewatch = (movieId: string) => {
  return useQuery({
    queryKey: ["rewatch", movieId],
    queryFn: () => getRewatchOrder(movieId),
    enabled: !!movieId,
  });
};

export default useRewatch;
