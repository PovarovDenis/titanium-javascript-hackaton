const Lesson = require('../models/Lesson');

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
    if (err) {
      //res.render('error', {});
      //req.flash('errors', { msg: 'Account with that email address already exists.' });
    }
    if (lesson) {
      return res.render('lesson', {
        title: 'Lesson ',
        lesson: this
      });
    }
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
