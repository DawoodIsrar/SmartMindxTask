import { Request, Response } from "express";
import tasks from "../models/tasks";

const createTask = async (req: Request, res: Response): Promise<void> => {
  try {
    if (req.body !== null) {
      const { title } = req.body;

      // Validate that 'title' is a string
      if (typeof title !== "string") {
        res.status(400).json({ message: "Title must be a string." });
        return; // Return early to avoid further processing
      }

      if (title == null) {
        res.status(400).json({ message: "Please fill the title field is required" });
      } else {
        const find = await tasks.find({ title: title });
        console.log("====", find);
        if (find?.length > 0) {
          res.status(200).json({ message: "Task already exists" });
        } else {
          const course = await tasks.create({
            title: title,
          });
          console.log("Task created:", course);
          res.status(201).json({ message: "Task is created successfully" });
        }
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
};

export default createTask;
