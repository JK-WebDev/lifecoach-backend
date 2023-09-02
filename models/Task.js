const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: String,
  isCompleted: Boolean,
  notes: Array,
  owner: String
});

const TaskModel = mongoose.model("Task", taskSchema);
module.exports = TaskModel;