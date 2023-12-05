const tasks = require("../models/tasks");

const createTask = async (req, res) => {
  try {
    if (req.body !== null) {
      if (req.body.title == null) {
        return res
          .status(400)
          .json({ message: "Please fill the title field is require" });
      }  else {
        const find = await tasks.find({ title: req.body.title });
        console.log("====", find);
        if (find?.length > 0) {
          return res.status(200).json({ message: "Task already exist" });
        } else {
          const course = await tasks.create({
            title: req.body.title,
          });
          console.log("Task created:", course);
          return res
            .status(201)
            .json({ message: "Task is created succesfully" });
        }
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("internal server error");
  }
};
module.exports = createTask;
