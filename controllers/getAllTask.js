const Tasks = require('../models/tasks');

const getAllTasks = async (req, res) => {
  try {
    let allTasks = await Tasks.find().exec();
            console.log("Tasks created:",allTasks)
            return res.status(201).json(allTasks)
        
       
    
  } catch (err) {
    console.log(err);
    return res.status(500).send("internal server error");
  }
};
module.exports = getAllTasks;
