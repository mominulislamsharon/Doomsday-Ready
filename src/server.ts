import app from "./app";
import connectDB from "./app/config/db";

const PORT = process.env.PORT || 5000;

const startServer = async (): Promise<void> => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Doomsday Ready server running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Server start failed:", error);
    process.exit(1);
  }
};

startServer();
