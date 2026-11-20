import { model, Schema } from "mongoose";
import { ICinema } from "./cinema.interface";
import { CINEMA_CONSTANTS } from "./cinema.constant";

const cinemaSchema = new Schema<ICinema>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    bundleSizes: {
      type: [Number],
      required: true,
      validate: [
        {
          validator: (value: number[]) =>
            value.length >= CINEMA_CONSTANTS.MIN_BUNDLE_TYPES &&
            value.length <= CINEMA_CONSTANTS.MAX_BUNDLE_TYPES,
          message: "Bundle types must be between 1 and 10",
        },

        {
          validator: (value: number[]) =>
            value.every(
              (size) =>
                Number.isInteger(size) &&
                size >= CINEMA_CONSTANTS.MIN_BUNDLE_SIZE &&
                size <= CINEMA_CONSTANTS.MAX_BUNDLE_SIZE,
            ),
          message: "Each bundle size must be an integer between 1 and 500",
        },
      ],
    },
  },
  {
    timestamps: true,
  },
);

export const cinema = model<ICinema>("cinema", cinemaSchema);
