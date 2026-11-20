import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";

const notFound = (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(404, `Route ${req.originalUrl} not found`));
};

export default notFound;
