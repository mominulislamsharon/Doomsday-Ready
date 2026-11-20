import { Types } from "mongoose";

export interface IMovie {
  title: string;
  releaseYear: number;
  runtime: number;
  prerequisites: Types.ObjectId[];
  watched: boolean;
}