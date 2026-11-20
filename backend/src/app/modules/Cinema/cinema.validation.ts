import { z } from "zod";
import { CINEMA_CONSTANTS } from "./cinema.constant";

const createCinemaValidationSchema = z.object({
  body: z.object({
    name: z.string().trim().min(1, "cinema name is required"),

    bundleSizes: z
      .array(
        z
          .number()
          .int("Bundle size must be an integer")
          .min(CINEMA_CONSTANTS.MIN_BUNDLE_SIZE)
          .max(CINEMA_CONSTANTS.MAX_BUNDLE_SIZE),
      )
      .min(CINEMA_CONSTANTS.MIN_BUNDLE_TYPES)
      .max(CINEMA_CONSTANTS.MAX_BUNDLE_TYPES)
      .refine(
        (sizes) => new Set(sizes).size === sizes.length,
        "Duplicate bundle sizes are not allowed",
      ),
  }),
});

export const cinemaValidation = {
  createCinemaValidationSchema,
};
