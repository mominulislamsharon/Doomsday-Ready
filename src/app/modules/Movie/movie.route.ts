import express from "express";
import validateRequest from "../../middlwares/validateRequest";
import { MovieValidation } from "./movie.validation";
import { MovieController } from "./movie.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(MovieValidation.createMovieValidationSchema),
  MovieController.createMovie,
);

router.get("/", MovieController.getAllMovies);

router.patch(
  "/:id",
  validateRequest(MovieValidation.updateMovieValidationSchema),
  MovieController.updateMovie,
);

router.get("/:id/rewatch-order", MovieController.getRewatchOrder);

export default router;
