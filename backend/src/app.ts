import express from "express";
import cors from "cors";
import router from "./app/routes";
import notFound from "./app/middlwares/notFound";
import globalErrorHandler from "./app/middlwares/globalErrorHandler";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Doomsday Ready API is running!",
  });
});

//Application routes
app.use("/", router);

app.use('/api', router); 

// not found middleware
app.use(notFound);

// global error handler
app.use(globalErrorHandler);

export default app;
