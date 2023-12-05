const tasks = require("../models/tasks");
const mongoose = require("mongoose");

const updateTask = async (req, res) => {
  const { id, title } = req.body;

  const taskExist = await tasks.findById(req.body.id);
  console.log(id,title);
  console.log(taskExist);

  if (taskExist !== null) {
    const updateTask = await tasks.findByIdAndUpdate(
      req.body.id,
      {
        title: title,
      },
      { new: true }
    );

    return res.status(200).json({
      data: updateTask,
      message: "Task is updated successfully.",
    });
  } else {
    return res.status(200).json({ message: "task does not exist." });
  }
};

module.exports = updateTask;
