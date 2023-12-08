
import mongoose, { Document, Schema } from "mongoose";

interface Task extends Document {
  title: string;

}

const taskSchema = new Schema({
  title: { type: String, required: true },

});

const TaskModel = mongoose.model<Task>("Task", taskSchema);

export default TaskModel;
