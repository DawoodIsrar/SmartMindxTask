import { Request, Response } from "express";
import tasks from "../models/tasks";

const updateTask = async (req: Request, res: Response): Promise<void> => {
  const { id, title } = req.body;

  try {
    const taskExist = await tasks.findById(id);

    console.log(id, title);
    console.log(taskExist);

    if (taskExist !== null) {
      const updatedTask = await tasks.findByIdAndUpdate(
        id,
        { title: title },
        { new: true }
      );

      res.status(200).json({
        data: updatedTask,
        message: "Task is updated successfully.",
      });
    } else {
      res.status(404).json({ message: "Task does not exist." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default updateTask;
