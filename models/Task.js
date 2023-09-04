const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    title: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
    notes: { type: Array, default: [] },
    owner: { type: String, required: true },
  },
  { timestamps: true }
);

const TaskModel = mongoose.model("Task", taskSchema);
module.exports = TaskModel;
