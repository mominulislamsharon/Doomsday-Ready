import axiosInstance from "@/lib/axios";

export interface IMovie {
  _id: string;
  title: string;
  releaseYear: number;
  runtime: number;
  prerequisites: IMovie[];
  watched: boolean;
}

export interface ICreateMovie {
  title: string;
  releaseYear: number;
  runtime: number;
  prerequisites?: string[];
  watched?: boolean;
}

interface IApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
export interface IUpdateMovie {
  watched?: boolean;
  prerequisites?: string[];
}

export const getAllMovies = async (): Promise<IMovie[]> => {
  const response = await axiosInstance.get<IApiResponse<IMovie[]>>("/movies");

  return response.data.data;
};

export const createMovie = async (movieData: ICreateMovie): Promise<IMovie> => {
  const response = await axiosInstance.post<IApiResponse<IMovie>>(
    "/movies",
    movieData,
  );

  return response.data.data;
};

export const updateMovie = async (
  movieId: string,
  movieData: IUpdateMovie,
): Promise<IMovie> => {
  const response = await axiosInstance.patch<IApiResponse<IMovie>>(
    `/movies/${movieId}`,
    movieData,
  );

  return response.data.data;
};
