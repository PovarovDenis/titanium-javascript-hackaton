const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  name: String,
  description: String
});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;
