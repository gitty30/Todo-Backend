const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    type: String,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("todoData", dataSchema);
