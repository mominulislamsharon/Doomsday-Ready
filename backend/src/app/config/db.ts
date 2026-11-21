import mongoose from "mongoose";
import config from "./index";

const connectDB = async (): Promise<void> => {
  const mongoURI = config.database_url;

  if (!mongoURI) {
    throw new Error("DATABASE_URL is not defined");
  }

  if (!/^mongodb(?:\+srv)?:\/\//i.test(mongoURI)) {
    throw new Error("Invalid MongoDB connection URI");
  }

  if (mongoose.connection.readyState === 1) {
    return;
  }

  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error;
  }
};

export default connectDB;
