const mongoose = require("mongoose");
var Schema = mongoose.Schema;
// для работы с promise
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
    lessonName: String,
    lessonDescription: String
});

const Lesson = mongoose.model('Lesson', userSchema);

module.exports = Lesson;