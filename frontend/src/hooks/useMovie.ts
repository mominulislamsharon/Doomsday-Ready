import { useQuery } from "@tanstack/react-query";
import { getAllMovies } from "@/services/movie.service";

const useMovies = () => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: getAllMovies,
  });
};

export default useMovies;
