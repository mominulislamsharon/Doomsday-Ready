import { useQuery } from "@tanstack/react-query";
import { getBookingQuote } from "@/services/booking.service";

const useBooking = (cinemaId: string, groupSize: number, enabled: boolean) => {
  return useQuery({
    queryKey: ["booking", cinemaId, groupSize],
    queryFn: () => getBookingQuote(cinemaId, groupSize),
    enabled: enabled && !!cinemaId && groupSize > 0,
  });
};

export default useBooking;
