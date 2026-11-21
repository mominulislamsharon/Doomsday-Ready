
import axiosInstance from "@/lib/axios";

export interface ICinema {
  _id: string;
  name: string;
  bundleSizes: number[];
}

export interface ICreateCinema {
  name: string;
  bundleSizes: number[];
}

interface IApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export const getAllCinemas = async (): Promise<ICinema[]> => {
  const response = await axiosInstance.get<IApiResponse<ICinema[]>>(
    "/cinemas",
  );

  return response.data.data;
};

export const createCinema = async (
  cinemaData: ICreateCinema,
): Promise<ICinema> => {
  const response = await axiosInstance.post<IApiResponse<ICinema>>(
    "/cinemas",
    cinemaData,
  );

  return response.data.data;
};
