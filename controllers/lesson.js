const Lesson = require('../models/Lesson');
const Task = require('../models/Task');

/**
 * GET /
 * lessons page.
 */
exports.lessonsPage = (req, res) => {
  Lesson.find()
    .then((lesson) => {
      res.render('lessons', {
        title: 'Lessons',
        db: lesson
      });
    });
};

/**
 *  GET /
 * lesson detailed page.
 */
exports.lessonDetailedPage = (req, res) => {
  Lesson.findOne({ _id: req.params.id }, (err, lesson) => {
    Task.find({ lessonId: req.params.id })
      .then((task) => {
        if (err) {
          // res.render('error', {});
          // req.flash('errors', { msg: 'Account with that email address already exists.' });
        }
        if (lesson) {
          return res.render('lesson', {
            title: 'Lesson ',
            lesson: lesson, // or this
            db: task
          });
        }
      });
  });
};

exports.lessonEditPage = (req, res) => {
  Lesson.findOne({ _id: req.params.id }, (err, lesson) => {
    if (err) {
      //res.render('error', {});
      //req.flash('errors', { msg: 'Account with that email address already exists.' });
    }
    if (lesson) {
      return res.render('admin/lesson-edit', {
        title: 'Edit lesson ',
        lessonId: req.params.id,
        lessonName: lesson.name,
        lessonDescription: lesson.description
      });
    }
  });
};
