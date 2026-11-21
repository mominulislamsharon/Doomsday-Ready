import axiosInstance from "@/lib/axios";

console.log("API URL:", import.meta.env.VITE_API_URL);

export interface IMovie {
  _id: string;
  title: string;
  releaseYear: number;
  runtime: number;
  prerequisites: IMovie[];
  watched: boolean;
}

interface IApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export const getAllMovies = async (): Promise<IMovie[]> => {
  const response = await axiosInstance.get<IApiResponse<IMovie[]>>("/movies");

  console.log("Movie API Response:", response.data);

  return response.data.data;
};