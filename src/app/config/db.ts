import mongoose from "mongoose";
import config from "./index";

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = config.database_url;

    if (!mongoURI) {
      throw new Error("DATABASE_URL is not defined in .env file");
    }

    if (!/^mongodb(?:\+srv)?:\/\//i.test(mongoURI)) {
      throw new Error(
        "DATABASE_URL must be a MongoDB connection URI starting with mongodb:// or mongodb+srv://",
      );
    }

    await mongoose.connect(mongoURI);

    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;