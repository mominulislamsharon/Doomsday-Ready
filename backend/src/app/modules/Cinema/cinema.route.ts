import express from "express";
import validateRequest from "../../middlwares/validateRequest";
import { cinemaValidation } from "./cinema.validation";
import { CinemaControllers } from "./cinema.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(cinemaValidation.createCinemaValidationSchema),
  CinemaControllers.createCinema,
);

router.get("/", CinemaControllers.getAllCinemas);

router.get("/:id/booking", CinemaControllers.getBookingQuote);

export default router;
