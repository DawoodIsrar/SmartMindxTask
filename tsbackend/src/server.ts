import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import addTask from "./routes/addTask";
import allTask from "./routes/allTasks";
import updateTask from "./routes/updateTask";
import deleteTask from "./routes/deleteTask";

dotenv.config();

// Create Express app
const app = express();

// DB connection
mongoose
  .connect(process.env.DATABASE!, {})
  .then(() => console.log("**DB CONNECTED**"))
  .catch((err) => console.log("DB CONNECTION ERR => ", err));

// Apply middlewares
app.use(cors());
app.use(express.json());
app.use(addTask);
app.use(allTask);
app.use(updateTask);
app.use(deleteTask);

// Routes
// readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

// Port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
