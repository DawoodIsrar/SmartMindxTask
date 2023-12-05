const tasks = require("../models/tasks");
const mongoose = require("mongoose");

const deleteTask = async (req, res) => {
  const { id } = req.body;

  const taskExist = await tasks.findById(req.body.id);
  console.log(id);
  console.log(taskExist);

  if (taskExist !== null) {
    const updateTask = await tasks.findByIdAndDelete(
      req.body.id
    );

    return res.status(200).json({
      data: updateTask,
      message: "Task is deleted successfully.",
    });
  } else {
    return res.status(200).json({ message: "task does not exist." });
  }
};

module.exports = deleteTask;
