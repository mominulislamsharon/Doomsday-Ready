import { useQuery } from "@tanstack/react-query";
import { getAllCinemas } from "@/services/cinema.service";

const useCinemas = () => {
  return useQuery({
    queryKey: ["cinemas"],
    queryFn: getAllCinemas,
  });
};

export default useCinemas;
