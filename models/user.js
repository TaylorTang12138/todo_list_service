const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isLock: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("users", UserSchema);
