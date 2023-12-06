const tasks = require("../models/tasks");
const mongoose = require("mongoose");

const deleteTask = async (req, res) => {
  const { id } = req.params; // Use req.params directly, no need for req.params.id

  try {
    const taskExist = await tasks.findById(id);
     console.log(taskExist)
    if (taskExist) {
      const deletedTask = await tasks.findByIdAndDelete(id);

      return res.status(200).json({
        data: deletedTask,
        message: "Task is deleted successfully.",
      });
    } else {
      return res.status(404).json({ message: "Task does not exist." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = deleteTask;
