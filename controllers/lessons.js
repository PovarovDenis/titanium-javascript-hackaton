const Lessons = require('./../models/Lessons');

exports.ListOfLessons = (req, res) => {
  console.log('get lessons')
  res.render('./llessons/lessonsList/lessonsList.pug', {
    title: 'ShowLessons',
    lessons: [
      {
        name: 'Lesson 1',
        description: 'Desc'
      }
    ]
  });
};

exports.lessonById = (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.redirect('/');
  }

  Lessons.findOne({_id: id}, (err, lesson) => {
    if (!lesson || err) {
      return res.redirect('/');
    } 

    res.render('account/lessons/lessonById', {
      lesson: lesson
    });
  });

};