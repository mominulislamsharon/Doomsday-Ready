import { useState } from "react";
import { Film, Clock, Loader2, CheckCircle2, Circle } from "lucide-react";

import useMovies from "@/hooks/useMovie";
import useRewatch from "@/hooks/useRewatch";

const RewatchPlan = () => {
  const [selectedMovie, setSelectedMovie] = useState("");

  const { data: movies = [], isLoading: moviesLoading } = useMovies();

  const {
    data: rewatchPlan,
    isLoading: planLoading,
    isError,
  } = useRewatch(selectedMovie);

  const progress =
    rewatchPlan && rewatchPlan.totalMovies > 0
      ? (rewatchPlan.watchedCount / rewatchPlan.totalMovies) * 100
      : 0;

  return (
    <div className="min-h-screen bg-[#0B1020] px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-amber-400">
            Your Movie Journey
          </p>

          <h1 className="text-3xl font-bold md:text-4xl">
            Rewatch <span className="text-amber-400">Plan</span>
          </h1>

          <p className="mt-3 text-gray-400">
            Follow the correct movie order before watching your selected movie.
          </p>
        </div>

        {/* Movie Selection */}
        <div className="mb-8 rounded-2xl border border-white/10 bg-[#121A2D] p-6">
          <label className="mb-3 block text-sm font-medium text-gray-300">
            Select Target Movie
          </label>

          <select
            value={selectedMovie}
            onChange={(e) => setSelectedMovie(e.target.value)}
            disabled={moviesLoading}
            className="w-full rounded-xl border border-white/10 bg-[#0B1020] px-4 py-3 text-white outline-none focus:border-amber-400"
          >
            <option value="">Choose a movie</option>

            {movies.map((movie) => (
              <option key={movie._id} value={movie._id}>
                {movie.title}
              </option>
            ))}
          </select>

          {moviesLoading && (
            <p className="mt-2 text-xs text-gray-400">Loading movies...</p>
          )}
        </div>

        {/* Empty State */}
        {!selectedMovie && (
          <div className="rounded-2xl border border-dashed border-white/10 py-16 text-center">
            <Film className="mx-auto mb-4 h-12 w-12 text-amber-400" />

            <h2 className="text-xl font-semibold">Choose a Movie to Start</h2>

            <p className="mt-2 text-sm text-gray-400">
              Your rewatch plan will appear here.
            </p>
          </div>
        )}

        {/* Loading */}
        {selectedMovie && planLoading && (
          <div className="py-16 text-center text-amber-400">
            <Loader2 className="mx-auto mb-3 h-8 w-8 animate-spin" />
            Loading rewatch plan...
          </div>
        )}

        {/* Error */}
        {selectedMovie && isError && (
          <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-5 text-center text-red-400">
            Failed to load rewatch plan. Please try again.
          </div>
        )}

        {/* Rewatch Plan */}
        {rewatchPlan && (
          <div className="rounded-2xl border border-white/10 bg-[#121A2D] p-6">
            {/* Section Header */}
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-amber-400" />

              <h2 className="text-xl font-bold">Your Watch Order</h2>
            </div>

            {/* Progress */}
            <div className="mt-7">
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="text-sm text-gray-400">Watching Progress</span>

                <span className="text-sm font-semibold text-amber-400">
                  {rewatchPlan.watchedCount} of {rewatchPlan.totalMovies}{" "}
                  watched
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-amber-400 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="mt-2 text-right text-xs text-gray-500">
                {Math.round(progress)}% completed
              </p>
            </div>

            {/* Summary Cards */}
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-[#0B1020] p-5">
                <p className="text-sm text-gray-400">Total Movies</p>

                <h3 className="mt-2 text-2xl font-bold">
                  {rewatchPlan.totalMovies}
                </h3>
              </div>

              <div className="rounded-xl bg-[#0B1020] p-5">
                <p className="text-sm text-gray-400">Watched</p>

                <h3 className="mt-2 text-2xl font-bold text-green-400">
                  {rewatchPlan.watchedCount}
                </h3>
              </div>

              <div className="rounded-xl bg-[#0B1020] p-5">
                <p className="text-sm text-gray-400">Remaining Runtime</p>

                <h3 className="mt-2 text-2xl font-bold text-amber-400">
                  {rewatchPlan.remainingRuntime} min
                </h3>
              </div>
            </div>

            {/* Prerequisite Movie List */}
            <div className="mt-9">
              <h3 className="mb-5 text-lg font-semibold">
                Prerequisite Movies
              </h3>

              {rewatchPlan.prerequisites.length === 0 ? (
                <div className="rounded-xl border border-white/10 bg-[#0B1020] p-8 text-center">
                  <CheckCircle2 className="mx-auto mb-3 h-9 w-9 text-green-400" />

                  <h4 className="font-semibold text-white">
                    No Prerequisites Required
                  </h4>

                  <p className="mt-2 text-sm text-gray-400">
                    You can watch this movie directly!
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {rewatchPlan.prerequisites.map((movie, index) => (
                    <div
                      key={movie._id}
                      className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#0B1020] p-4 transition hover:border-amber-400/30"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-400/10 font-semibold text-amber-400">
                        {index + 1}
                      </span>

                      <div className="min-w-0 flex-1">
                        <h4 className="truncate font-semibold text-white">
                          {movie.title}
                        </h4>

                        <p className="mt-1 text-sm text-gray-400">
                          {movie.releaseYear} · {movie.runtime} minutes
                        </p>
                      </div>

                      <div
                        className={`flex shrink-0 items-center gap-2 rounded-full px-3 py-2 text-xs font-medium ${
                          movie.watched
                            ? "bg-green-400/10 text-green-400"
                            : "bg-amber-400/10 text-amber-400"
                        }`}
                      >
                        {movie.watched ? (
                          <CheckCircle2 className="h-4 w-4" />
                        ) : (
                          <Circle className="h-4 w-4" />
                        )}

                        <span className="hidden sm:inline">
                          {movie.watched ? "Watched" : "Not Watched"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RewatchPlan;
