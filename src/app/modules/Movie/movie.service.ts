import AppError from "../../errors/AppError";
import { IMovie } from "./movie.interface";
import { Movie } from "./movie.model";
import { Types } from "mongoose";

const createMovieIntoDB = async (payload: IMovie) => {
  const result = await Movie.create(payload);
  return result;
};

const getAllMoviesFromDB = async () => {
  const result = await Movie.find().populate("prerequisites");

  return result;
};

const updateMovieIntoDB = async (id: string, payload: Partial<IMovie>) => {
  const existingMovie = await Movie.findById(id);

  if (!existingMovie) {
    throw new AppError(404, "Movie not found");
  }

  if (payload.prerequisites) {
    const targetMovieId = id;

    const prerequisiteIds = payload.prerequisites.map((prerequisite) =>
      prerequisite.toString(),
    );

    for (const prerequisiteId of prerequisiteIds) {
      if (!Types.ObjectId.isValid(prerequisiteId)) {
        throw new AppError(400, "Invalid prerequisite movie ID");
      }
    }

    if (new Set(prerequisiteIds).size !== prerequisiteIds.length) {
      throw new AppError(400, "Duplicate prerequisites are not allowed");
    }

    const existingPrerequisites = await Movie.find({
      _id: { $in: prerequisiteIds },
    }).select("_id");

    if (existingPrerequisites.length !== prerequisiteIds.length) {
      throw new AppError(404, "One or more prerequisite movies not found");
    }

    const visited = new Set<string>();

    const checkCircularDependency = async (
      currentMovieId: string,
    ): Promise<void> => {
      if (currentMovieId === targetMovieId) {
        throw new AppError(409, "CIRCULAR_DEPENDENCY");
      }

      if (visited.has(currentMovieId)) {
        return;
      }

      visited.add(currentMovieId);

      const currentMovie =
        await Movie.findById(currentMovieId).select("prerequisites");

      if (!currentMovie) {
        return;
      }

      for (const prerequisite of currentMovie.prerequisites) {
        await checkCircularDependency(prerequisite.toString());
      }
    };

    for (const prerequisiteId of prerequisiteIds) {
      await checkCircularDependency(prerequisiteId);
    }
  }

  const result = await Movie.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

const getRewatchOrderFromDB = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) {
    throw new AppError(400, "Invalid movie ID");
  }

  const targetMovie = await Movie.findById(id).select("prerequisites");

  if (!targetMovie) {
    throw new AppError(404, "Movie not found");
  }

  const visited = new Set<string>();
  const orderedMovies: (IMovie & { _id: Types.ObjectId })[] = [];

  // DFS
  const visitMovie = async (movieId: string): Promise<void> => {
    if (visited.has(movieId)) {
      return;
    }

    visited.add(movieId);

    const movie = await Movie.findById(movieId);

    if (!movie) {
      throw new AppError(404, "Prerequisite movie not found");
    }

    for (const prerequisite of movie.prerequisites) {
      await visitMovie(prerequisite.toString());
    }

    orderedMovies.push(movie);
  };

  // Start DFS from target movie prerequisites

  for (const prerequisite of targetMovie.prerequisites) {
    await visitMovie(prerequisite.toString());
  }

  // Calculate watched count
  const watchedCount = orderedMovies.filter((movie) => movie.watched).length;

  // Calculate remaining runtime
  const remainingRuntime = orderedMovies.reduce(
    (total, movie) => total + (movie.watched ? 0 : movie.runtime),
    0,
  );

  return {
    prerequisites: orderedMovies,
    totalMovies: orderedMovies.length,
    watchedCount,
    remainingRuntime,
  };
};

export const MovieServices = {
  createMovieIntoDB,
  getAllMoviesFromDB,
  updateMovieIntoDB,
  getRewatchOrderFromDB,
};
