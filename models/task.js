const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: "",
  },
  remark: {
    type: String,
    default: "",
  },
  finished: {
    type: Boolean,
    default: false,
  },
  important: {
    type: Boolean,
    default: false,
  },
  steps: {
    type: Array,
    default: [],
  },
  updateTime: {
    type: String,
    default: "",
  },
  isDelete: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("tasks", TaskSchema);
