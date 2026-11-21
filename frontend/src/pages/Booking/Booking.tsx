import { useState } from "react";
import { Ticket, Users, CheckCircle2, XCircle } from "lucide-react";
import useCinemas from "@/hooks/useCinema";
import useBooking from "@/hooks/useBooking";

const Booking = () => {
  const [cinemaId, setCinemaId] = useState("");
  const [groupSize, setGroupSize] = useState(6);
  const [submitted, setSubmitted] = useState(false);

  const {
    data: cinemas = [],
    isLoading: cinemasLoading,
    isError: cinemasError,
  } = useCinemas();

  const {
    data: booking,
    isLoading: bookingLoading,
    isError: bookingError,
  } = useBooking(cinemaId, groupSize, submitted);

  const selectedCinema = cinemas.find((cinema) => cinema._id === cinemaId);

  const handleBooking = () => {
    if (!cinemaId || groupSize < 1) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0B1020] px-4 py-12 text-white sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-400">
            <Ticket size={28} />
          </div>

          <h1 className="text-3xl font-black sm:text-4xl">
            Book Your <span className="text-amber-400">Tickets</span>
          </h1>

          <p className="mt-3 text-sm text-gray-400 sm:text-base">
            Choose your cinema and group size to get the best seat bundle.
          </p>
        </div>

        <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-[#121A2D] p-6 shadow-xl sm:p-8">
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-gray-300">
              Select Cinema
            </label>

            <select
              value={cinemaId}
              onChange={(e) => {
                setCinemaId(e.target.value);
                setSubmitted(false);
              }}
              className="w-full rounded-lg border border-white/10 bg-[#0B1020] px-4 py-3 text-white outline-none transition focus:border-amber-400"
            >
              <option value="">Choose a cinema</option>

              {cinemas.map((cinema) => (
                <option key={cinema._id} value={cinema._id}>
                  {cinema.name}
                </option>
              ))}
            </select>

            {cinemasLoading && (
              <p className="mt-2 text-sm text-gray-400">Loading cinemas...</p>
            )}

            {cinemasError && (
              <p className="mt-2 text-sm text-red-400">
                Failed to load cinemas. Please try again.
              </p>
            )}
          </div>

          {selectedCinema && (
            <div className="mb-6 rounded-lg border border-white/10 bg-[#0B1020] p-4">
              <p className="text-sm text-gray-400">Available seat bundles</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {selectedCinema.bundleSizes.map((size) => (
                  <span
                    key={size}
                    className="rounded-md bg-amber-400/10 px-3 py-1 text-sm font-semibold text-amber-400"
                  >
                    {size} Seats
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mb-7">
            <label className="mb-2 block text-sm font-semibold text-gray-300">
              Group Size
            </label>

            <div className="relative">
              <Users
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                type="number"
                min="1"
                value={groupSize}
                onChange={(e) => {
                  setGroupSize(Number(e.target.value));
                  setSubmitted(false);
                }}
                className="w-full rounded-lg border border-white/10 bg-[#0B1020] py-3 pl-11 pr-4 text-white outline-none transition focus:border-amber-400"
                placeholder="Enter group size"
              />
            </div>
          </div>

          <button
            onClick={handleBooking}
            disabled={!cinemaId || groupSize < 1 || bookingLoading}
            className="w-full rounded-lg bg-amber-400 px-5 py-3 font-bold text-[#0B1020] transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {bookingLoading ? "Checking..." : "Get Booking Quote"}
          </button>

          {bookingLoading && (
            <p className="mt-5 text-center text-sm text-gray-400">
              Finding the minimum seat bundle combination...
            </p>
          )}

          {bookingError && submitted && (
            <p className="mt-5 text-center text-sm text-red-400">
              Failed to get booking quote. Please try again.
            </p>
          )}

          {booking && submitted && (
            <div className="mt-7 border-t border-white/10 pt-7">
              {booking.possible ? (
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <CheckCircle2 className="text-green-400" size={28} />

                    <div>
                      <h2 className="text-xl font-bold text-green-400">
                        Booking Possible!
                      </h2>
                      <p className="text-sm text-gray-400">{booking.cinema}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-[#0B1020] p-4">
                      <p className="text-sm text-gray-400">Group Size</p>
                      <p className="mt-1 text-2xl font-bold">
                        {booking.groupSize}
                      </p>
                    </div>

                    <div className="rounded-xl bg-[#0B1020] p-4">
                      <p className="text-sm text-gray-400">Minimum Bundles</p>
                      <p className="mt-1 text-2xl font-bold text-amber-400">
                        {booking.minimumBundles}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <h3 className="mb-3 font-semibold">Bundle Breakdown</h3>

                    <div className="space-y-3">
                      {Object.entries(booking.bundleBreakdown).map(
                        ([size, count]) => (
                          <div
                            key={size}
                            className="flex items-center justify-between rounded-lg border border-white/10 bg-[#0B1020] p-4"
                          >
                            <span className="text-gray-300">
                              {size} Seat Bundle
                            </span>

                            <span className="font-bold text-amber-400">
                              × {count}
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-6 text-center">
                  <XCircle size={36} className="mx-auto mb-3 text-red-400" />

                  <h2 className="text-xl font-bold text-red-400">
                    Booking Not Possible
                  </h2>

                  <p className="mt-2 text-sm text-gray-400">
                    No exact seat bundle combination is available for{" "}
                    {booking.groupSize} people at {booking.cinema}.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
