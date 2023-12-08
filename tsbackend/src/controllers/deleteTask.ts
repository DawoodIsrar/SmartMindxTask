import { Request, Response } from "express";
import tasks from "../models/tasks";

const deleteTask = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const taskExist = await tasks.findById(id);
    console.log(taskExist);

    if (taskExist) {
      const deletedTask = await tasks.findByIdAndDelete(id);

      res.status(200).json({
        data: deletedTask,
        message: "Task is deleted successfully.",
      });
    } else {
      res.status(404).json({ message: "Task does not exist." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default deleteTask;
