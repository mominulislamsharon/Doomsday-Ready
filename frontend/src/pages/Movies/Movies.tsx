import { useState } from "react";
import { Search, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import useMovies from "@/hooks/useMovie";
import MovieCard from "./MovieCards";

const Movies = () => {
  const { data: movies = [], isLoading, isError } = useMovies();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" ||
      (filter === "watched" && movie.watched) ||
      (filter === "unwatched" && !movie.watched);

    return matchesSearch && matchesFilter;
  });

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B1020] text-white">
        <p className="text-amber-400">Loading movies...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B1020] text-white">
        <p className="text-red-400">Failed to load movies. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B1020] px-5 py-12 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
            Explore Collection
          </p>

          <h1 className="text-3xl font-bold md:text-5xl">
            All <span className="text-amber-400">Movies</span>
          </h1>

          <p className="mt-3 text-gray-400">
            Explore your movie collection and manage your watchlist.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search movies by title..."
              className="h-12 w-full rounded-xl border border-white/10 bg-[#121A2D] pl-12 pr-4 text-white outline-none placeholder:text-gray-500 focus:border-amber-400"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {["all", "watched", "unwatched"].map((item) => (
              <Button
                key={item}
                onClick={() => setFilter(item)}
                variant="outline"
                className={`capitalize ${
                  filter === item
                    ? "border-amber-400 bg-amber-400 text-black hover:bg-amber-300"
                    : "border-white/10 bg-[#121A2D] text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>

        <p className="mb-5 text-sm text-gray-400">
          Showing {filteredMovies.length} movies
        </p>

        {filteredMovies.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie._id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-[#121A2D] py-16 text-center">
            <Film className="mx-auto mb-4 h-10 w-10 text-gray-500" />

            <h3 className="text-lg font-semibold">No movies found</h3>

            <p className="mt-2 text-sm text-gray-400">
              Try another search or filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
