const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: String,
  description: String,
  tests: String,
  lessonId: String
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
