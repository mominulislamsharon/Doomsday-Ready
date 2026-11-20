import express from "express";
import MovieRoutes from "../modules/Movie/movie.route";
import CinemaRoutes from "../modules/Cinema/cinema.route";

const router = express.Router();

//movie routes will be adde here
router.use("/movies", MovieRoutes);

// cinema routes will be added here

router.use("/cinemas", CinemaRoutes);

export default router;
