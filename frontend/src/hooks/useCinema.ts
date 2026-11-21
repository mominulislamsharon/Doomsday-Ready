import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { getAllCinemas, createCinema } from "@/services/cinema.service";

const useCinemas = () => {
  return useQuery({
    queryKey: ["cinemas"],
    queryFn: getAllCinemas,
  });
};

export const useCreateCinema = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCinema,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cinemas"],
      });
    },
  });
};

export default useCinemas;
