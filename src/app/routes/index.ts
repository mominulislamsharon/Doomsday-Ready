import express from "express";
import MovieRoutes from "../modules/Movie/movie.route";

const router = express.Router();

//movie routes will be adde here
router.use("/movies", MovieRoutes);

// cinema routes will be added here

export default router;
