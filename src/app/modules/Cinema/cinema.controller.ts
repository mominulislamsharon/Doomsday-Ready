import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { cinemaServices } from "./cinema.service";
import sendResponse from "../../utils/sendResponse";

const createCinema = catchAsync(async (req: Request, res: Response) => {
  const result = await cinemaServices.createCinemaIntoDB(req.body);

  sendResponse(res, 201, "Cinema created successfully", result);
});

const getAllCinemas = catchAsync(async (req: Request, res: Response) => {
  const result = await cinemaServices.getAllCinemasFromDB();

  sendResponse(res, 200, "Cinemas retrieved successfully", result);
});

const getBookingQuote = catchAsync(async (req, res) => {
  const result = await cinemaServices.getBookingQuoteFromDB(
    req.params.id as string,
    Number(req.query.groupSize),
  );

  sendResponse(res, 200, "Cinema booking quote retrieved successfully", result);
});

export const CinemaControllers = {
  createCinema,
  getAllCinemas,
  getBookingQuote,
};
