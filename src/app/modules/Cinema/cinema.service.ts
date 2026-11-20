import { ICinema } from "./cinema.interface";
import { cinema } from "./cinema.model";

const createCinemaIntoDB = async (payload: ICinema) => {
  const result = await cinema.create(payload);
  return result;
};

const getAllCinemasFromDB = async () => {
  const result = await cinema.find();
  return result;
};

export const cinemaServices = {
  createCinemaIntoDB,
  getAllCinemasFromDB,
};
