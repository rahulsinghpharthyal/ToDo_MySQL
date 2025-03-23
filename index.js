import express from "express";
import cors from "cors";
import db from "./database/dbConnection.js";

const app = express();
app.use(cors());
app.use(express.json());

import todoRoutes from "./routes/todoRoute.js";
import { errorMiddleware } from './middleware/errorHandler.js';

app.use("/api/v1/todos", todoRoutes);


app.use(errorMiddleware);
const PORT = 8000;
app.listen(PORT, async () => {
  try {
    await db.getConnection();
    console.log("✅ MySQL Database Connected!");
    console.log(`Server running at port ${PORT}`);
  } catch (error) {
    console.log("❌ MySQL Database Connection Failed!")
  }
});
