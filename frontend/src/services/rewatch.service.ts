import axiosInstance from "@/lib/axios";
import type { IMovie } from "@/services/movie.service";

interface IApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface IRewatchPlan {
  prerequisites: IMovie[];
  totalMovies: number;
  watchedCount: number;
  remainingRuntime: number;
}

export const getRewatchOrder = async (
  movieId: string,
): Promise<IRewatchPlan> => {
  const response = await axiosInstance.get<IApiResponse<IRewatchPlan>>(
    `/movies/${movieId}/rewatch-order`,
  );

  return response.data.data;
};
