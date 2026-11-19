import { IMovie } from "./movie.interface";
import { Movie } from "./movie.model";

const createMovieIntoDB = async (payload: IMovie) => {
  const result = await Movie.create(payload);
  return result;
};

const getAllMoviesFromDB = async () => {
  const result = await Movie.find().populate("prerequisites");

  return result;
};

export const MovieServices = {
  createMovieIntoDB,
  getAllMoviesFromDB,
};
