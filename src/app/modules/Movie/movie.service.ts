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

export const MovieServices = {
  createMovieIntoDB,
  getAllMoviesFromDB,
  updateMovieIntoDB,
};
