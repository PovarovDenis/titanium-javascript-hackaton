const Lesson = require('../models/Lessons');

exports.ListOfLessons = (req, res) => {

  Lesson.find((err, items) => {
    if(err){
        res.send(err);
        return;
    }
    res.render('account/lessons/lessonsList/lessonsList.pug', {
      title: 'ShowLessons',
      lessons: items
    });
  })


 
};