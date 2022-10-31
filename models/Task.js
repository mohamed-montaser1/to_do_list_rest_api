const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  task: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
