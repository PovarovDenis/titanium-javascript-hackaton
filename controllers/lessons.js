
const Lessons = require('./../models/Lessons');

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
}

exports.ListOfLessons = (req, res) => {

  Lessons.find((err, items) => {
    if(err){
        res.send(err);
        return;
    }
    res.render('account/lessons/lessonsList/lessonsList.pug', { 
      title: 'ShowLessons',
      lessons: items
    });
  })
}
