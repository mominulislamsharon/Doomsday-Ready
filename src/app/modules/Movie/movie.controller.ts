import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { MovieServices } from "./movie.service";

const createMovie = catchAsync(async (req: Request, res: Response) => {
  const result = await MovieServices.createMovieIntoDB(req.body);

  sendResponse(res, 201, "Movie created successfully", result);
});

const getAllMovies = catchAsync(async (req: Request, res: Response) => {
  const result = await MovieServices.getAllMoviesFromDB();

  sendResponse(res, 200, "Movies retrieved successfully", result);
});

const updateMovie = catchAsync(async (req: Request, res: Response) => {
  const result = await MovieServices.updateMovieIntoDB(
    req.params.id as string,
    req.body,
  );

  sendResponse(res, 200, "Movie updated successfully", result);
});

const getRewatchOrder = catchAsync(async (req: Request, res: Response) => {
  const result = await MovieServices.getRewatchOrderFromDB(
    req.params.id as string,
  );
  sendResponse(res, 200, "Rewatch order retrieved successfully", result);
});

export const MovieController = {
  createMovie,
  getAllMovies,
  updateMovie,
  getRewatchOrder,
};
