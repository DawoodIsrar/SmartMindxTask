import { Request, Response } from "express";
import Tasks from "../models/tasks";

const getAllTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    let allTasks = await Tasks.find().exec();
    console.log("Tasks created:", allTasks);
    res.status(200).json(allTasks);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};

export default getAllTasks;
