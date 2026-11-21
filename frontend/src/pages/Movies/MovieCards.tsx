import { useState } from "react";
import { CalendarDays, Clock, Eye, EyeOff, Film } from "lucide-react";

import type { IMovie } from "@/services/movie.service";

interface MovieCardProps {
  movie: IMovie;
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

const MovieCard = ({ movie }: MovieCardProps) => {
  const [imageError, setImageError] = useState(false);

  const poster = moviePosters[movie.title];

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

          <span className="text-xs text-gray-500">Movie</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
