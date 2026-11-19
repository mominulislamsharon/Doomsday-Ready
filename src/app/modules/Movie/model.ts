import { model, Schema } from "mongoose";
import { IMovie } from "./interface";

const movieSchema = new Schema<IMovie>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    releaseYear: {
      type: Number,
      required: true,
      min: 1,
      validate: {
        validator: Number.isInteger,
        message: "Release year must be an integer",
      },
    },
    prerequisites: [
      {
        type: Schema.Types.ObjectId,
        ref: "Movie",
      },
    ],
    watched: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const  Movie = model<IMovie>("Movie", movieSchema);
