import { ICinema } from "./cinema.interface";
import AppError from "../../errors/AppError";
import { Types } from "mongoose";
import { cinema } from "./cinema.model";

const createCinemaIntoDB = async (payload: ICinema) => {
  const result = await cinema.create(payload);
  return result;
};

const getAllCinemasFromDB = async () => {
  const result = await cinema.find();
  return result;
};

const calculateMinimumBundles = (bundleSizes: number[], groupSize: number) => {
  const dp = Array(groupSize + 1).fill(Infinity);
  const lastBundle = Array(groupSize + 1).fill(0);

  dp[0] = 0;

  for (let amount = 1; amount <= groupSize; amount++) {
    for (const bundle of bundleSizes) {
      if (bundle <= amount) {
        const newCount = dp[amount - bundle] + 1;

        if (newCount < dp[amount]) {
          dp[amount] = newCount;
          lastBundle[amount] = bundle;
        }
      }
    }
  }

  if (dp[groupSize] === Infinity) {
    return {
      possible: false,
      minimumBundles: null,
      bundleBreakdown: {},
    };
  }

  const bundleBreakdown: Record<number, number> = {};
  let remaining = groupSize;

  while (remaining > 0) {
    const bundle = lastBundle[remaining];

    if (bundle === 0) {
      break;
    }

    bundleBreakdown[bundle] = (bundleBreakdown[bundle] || 0) + 1;
    remaining = remaining - bundle;
  }

  return {
    possible: true,
    minimumBundles: dp[groupSize],
    bundleBreakdown,
  };
};

const getBookingQuoteFromDB = async (id: string, groupSize: number) => {
  if (!Types.ObjectId.isValid(id)) {
    throw new AppError(400, "Invalid cinema ID");
  }

  const cinemas = await cinema.findById(id);

  if (!cinemas) {
    throw new AppError(404, "Cinema not found");
  }

  if (!Number.isInteger(groupSize) || groupSize < 1 || groupSize > 10000) {
    throw new AppError(400, "Invalid group size");
  }

  const bookingResult = calculateMinimumBundles(cinemas.bundleSizes, groupSize);

  return {
    cinema: cinemas.name,
    groupSize,
    ...bookingResult,
  };
};

export const cinemaServices = {
  createCinemaIntoDB,
  getAllCinemasFromDB,
  getBookingQuoteFromDB,
};
