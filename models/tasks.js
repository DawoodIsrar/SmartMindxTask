const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const taskSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tasks", taskSchema);
