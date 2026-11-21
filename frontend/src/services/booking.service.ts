import axiosInstance from "@/lib/axios";

interface IApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface IBookingQuote {
  cinema: string;
  groupSize: number;
  possible: boolean;
  minimumBundles: number;
  bundleBreakdown: Record<string, number>;
}

export const getBookingQuote = async (
  cinemaId: string,
  groupSize: number,
): Promise<IBookingQuote> => {
  const response = await axiosInstance.get<IApiResponse<IBookingQuote>>(
    `/cinemas/${cinemaId}/booking`,
    {
      params: {
        groupSize,
      },
    },
  );

  return response.data.data;
};
