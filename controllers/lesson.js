const Lesson = require('../models/Lesson');
const Task = require('../models/Task');

/**
 * GET /lessons
 * Lessons page.
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
 * GET /lesson/:id
 * Lesson detailed page.
 */
exports.lessonDetailedPage = (req, res) => {
  Lesson.findOne({ _id: req.params.id }, (err, lesson) => {
    Task.find({ lessonId: req.params.id })
      .then((task) => {
        if (err) {
          // res.render('error', {});
          // req.flash('errors', { msg: err });
        }
        if (lesson) {
          return res.render('lesson', {
            title: 'Lesson ',
            lesson,
            db: task
          });
        }
      });
  });
};

/**
 * GET admin/lesson-form/edit/:id
 * Lesson edit page.
 */
exports.lessonEditPage = (req, res) => {
  Lesson.findOne({ _id: req.params.id }, (err, lesson) => {
    if (err) {
      // res.render('error', {});
      // req.flash('errors', { msg: err });
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
