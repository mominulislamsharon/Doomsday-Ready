import { Response } from "express";

interface IResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}

const sendResponse = <T>(
  res: Response,
  statusCode: number,
  message: string,
  data: T,
) => {
  const responseData: IResponse<T> = {
    success: true,
    message,
    data,
  };

  res.status(statusCode).json(responseData);
};

export default sendResponse;
