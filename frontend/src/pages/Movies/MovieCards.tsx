import { useState } from "react";
import {
  CalendarDays,
  Clock,
  Eye,
  EyeOff,
  Film,
  Pencil,
  X,
} from "lucide-react";

import type { IMovie } from "@/services/movie.service";
import { useUpdateMovie } from "@/hooks/useMovie";

interface MovieCardProps {
  movie: IMovie;
  allMovies: IMovie[];
}

const moviePosters: Record<string, string> = {
  "Iron Man": "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
  "Captain America: The First Avenger":
    "https://image.tmdb.org/t/p/w500/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg",
  "The Avengers":
    "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
  "Captain America: Civil War":
    "https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
  "Doctor Strange":
    "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
  "Thor: Ragnarok":
    "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
  "Avengers: Infinity War":
    "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
  "Avengers: Endgame":
    "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  "Avengers: Doomsday":
    "https://lumiere-a.akamaihd.net/v1/images/g_movies_avengersdoomsday_d23update_poster_8c2ab836.jpeg?region=0%2C0%2C1300%2C730",
  "Test Invalid Prerequisite":
    "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
};

const MovieCard = ({ movie, allMovies }: MovieCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const [selectedPrerequisites, setSelectedPrerequisites] = useState<string[]>(
    movie.prerequisites.map((item) => item._id),
  );

  const updateWatchedMutation = useUpdateMovie();
  const updatePrerequisitesMutation = useUpdateMovie();

  const poster = moviePosters[movie.title];

  const handleWatchedToggle = () => {
    updateWatchedMutation.mutate({
      movieId: movie._id,
      movieData: {
        watched: !movie.watched,
      },
    });
  };

  const handlePrerequisiteChange = (movieId: string) => {
    setSelectedPrerequisites((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId],
    );
  };

  const handleEditOpen = () => {
    setSelectedPrerequisites(movie.prerequisites.map((item) => item._id));
    setShowEdit(true);
  };

  const handleSavePrerequisites = () => {
    updatePrerequisitesMutation.mutate(
      {
        movieId: movie._id,
        movieData: {
          prerequisites: selectedPrerequisites,
        },
      },
      {
        onSuccess: () => {
          setShowEdit(false);
        },
      },
    );
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#121A2D] transition-all hover:-translate-y-1 hover:border-amber-400/40">
      <div className="h-72 overflow-hidden bg-[#1B263B]">
        {poster && !imageError ? (
          <img
            src={poster}
            alt={movie.title}
            onError={() => setImageError(true)}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-amber-400">
            <Film className="h-10 w-10" />
          </div>
        )}
      </div>

      <div className="p-6">
        <h2 className="mb-3 text-xl font-bold">{movie.title}</h2>

        <div className="space-y-3 text-sm text-gray-400">
          <p className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-amber-400" />
            {movie.releaseYear}
          </p>

          <p className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-amber-400" />
            {movie.runtime} minutes
          </p>

          <p>
            Prerequisites:{" "}
            <span className="text-white">{movie.prerequisites.length}</span>
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
          <span
            className={`flex items-center gap-2 text-sm ${
              movie.watched ? "text-green-400" : "text-amber-400"
            }`}
          >
            {movie.watched ? (
              <Eye className="h-4 w-4" />
            ) : (
              <EyeOff className="h-4 w-4" />
            )}

            {movie.watched ? "Watched" : "Not Watched"}
          </span>

          <button
            onClick={handleWatchedToggle}
            disabled={updateWatchedMutation.isPending}
            className="rounded-lg bg-white/10 px-3 py-2 text-xs font-medium text-white transition hover:bg-amber-400 hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
          >
            {updateWatchedMutation.isPending
              ? "Updating..."
              : movie.watched
                ? "Mark Unwatched"
                : "Mark Watched"}
          </button>
        </div>

        <button
          onClick={handleEditOpen}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-amber-400/30 bg-amber-400/10 px-3 py-2 text-sm text-amber-400 transition hover:bg-amber-400 hover:text-black"
        >
          <Pencil className="h-4 w-4" />
          Edit Prerequisites
        </button>

        {showEdit && (
          <div className="mt-4 rounded-xl border border-white/10 bg-[#0B1020] p-4">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-semibold text-white">
                Select Prerequisite Movies
              </h3>

              <button
                onClick={() => setShowEdit(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-48 space-y-3 overflow-y-auto">
              {allMovies
                .filter((item) => item._id !== movie._id)
                .map((item) => (
                  <label
                    key={item._id}
                    className="flex cursor-pointer items-center gap-3 text-sm text-gray-300"
                  >
                    <input
                      type="checkbox"
                      checked={selectedPrerequisites.includes(item._id)}
                      onChange={() => handlePrerequisiteChange(item._id)}
                      className="h-4 w-4 accent-amber-400"
                    />

                    <span>{item.title}</span>
                  </label>
                ))}
            </div>

            {updatePrerequisitesMutation.isError && (
              <p className="mt-3 text-xs text-red-400">
                Failed to update prerequisites. Please try again.
              </p>
            )}

            <div className="mt-4 flex gap-2">
              <button
                onClick={handleSavePrerequisites}
                disabled={updatePrerequisitesMutation.isPending}
                className="flex-1 rounded-lg bg-amber-400 px-3 py-2 text-sm font-semibold text-black hover:bg-amber-300 disabled:opacity-50"
              >
                {updatePrerequisitesMutation.isPending
                  ? "Saving..."
                  : "Save Changes"}
              </button>

              <button
                onClick={() => setShowEdit(false)}
                className="rounded-lg bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {updateWatchedMutation.isError && (
          <p className="mt-3 text-xs text-red-400">
            Failed to update watched status.
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
