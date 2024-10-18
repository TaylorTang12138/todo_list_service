const mongoose = require("mongoose");

const GroupSchema = mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  isDelete: {
    type: Boolean,
    default: false,
  },
});

module.exports = new mongoose.model("group", GroupSchema);
