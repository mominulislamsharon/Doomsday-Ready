import axiosInstance from "@/lib/axios";

export interface ICinema {
  _id: string;
  name: string;
  bundleSizes: number[];
}

interface IApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export const getAllCinemas = async (): Promise<ICinema[]> => {
  const response = await axiosInstance.get<IApiResponse<ICinema[]>>("/cinemas");

  return response.data.data;
};
