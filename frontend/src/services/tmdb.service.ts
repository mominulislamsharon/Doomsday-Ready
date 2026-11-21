import axios from "axios";

interface ITMDBMovie {
  title: string;
  release_date: string;
  poster_path: string | null;
}

interface ITMDBResponse {
  results: ITMDBMovie[];
}

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const getMoviePoster = async (
  title: string,
  releaseYear: number,
): Promise<string | null> => {
  if (!TMDB_API_KEY) {
    return null;
  }

  const response = await axios.get<ITMDBResponse>(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        api_key: TMDB_API_KEY,
        query: title,
        primary_release_year: releaseYear,
      },
    },
  );

  const movies = response.data.results;

  const movie =
    movies.find(
      (item) =>
        item.release_date?.startsWith(String(releaseYear)) && item.poster_path,
    ) ||
    movies.find(
      (item) =>
        item.title.toLowerCase() === title.toLowerCase() && item.poster_path,
    ) ||
    movies.find((item) => item.poster_path);

  if (!movie?.poster_path) {
    return null;
  }

  return `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
};
