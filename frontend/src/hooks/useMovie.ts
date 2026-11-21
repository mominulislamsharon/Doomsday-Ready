import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createMovie,
  getAllMovies,
  updateMovie,
} from "@/services/movie.service";

const useMovies = () => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: getAllMovies,
  });
};

export const useCreateMovie = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createMovie,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["movies"],
      });
    },
  });
};

export const useUpdateMovie = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      movieId,
      movieData,
    }: {
      movieId: string;
      movieData: { watched?: boolean; prerequisites?: string[] };
    }) => updateMovie(movieId, movieData),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["movies"],
      });
    },
  });
};

export default useMovies;
