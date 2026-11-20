import { z } from "zod";
import { MOVIE_CONSTANTS } from "./movie.constant";

const createMovieValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Movie title is required"),
    releaseYear: z
      .number()
      .int("Release year must be an integer")
      .min(1, "Invalid release year"),

    runtime: z
      .number()
      .int("Runtime must be an integer")
      .min(MOVIE_CONSTANTS.MIN_RUNTIME)
      .max(MOVIE_CONSTANTS.MAX_RUNTIME),

    prerequisites: z.array(z.string()).optional().default([]),

    watched: z.boolean().default(false),
  }),
});

const updateMovieValidationSchema = z.object({
  body: z
    .object({
      title: z.string().trim().min(1).optional(),

      releaseYear: z.number().int().min(1).optional(),

      runtime: z
        .number()
        .int()
        .min(MOVIE_CONSTANTS.MIN_RUNTIME)
        .max(MOVIE_CONSTANTS.MAX_RUNTIME)
        .optional(),

      prerequisites: z.array(z.string()).optional(),

      watched: z.boolean().optional(),
    })
    .refine((data) => Object.keys(data).length > 0, {
      message: "At least one field is required for update",
    }),
});

export const MovieValidation = {
  createMovieValidationSchema,
  updateMovieValidationSchema,
};
