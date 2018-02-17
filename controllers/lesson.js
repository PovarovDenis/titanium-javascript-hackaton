const Lesson = require('../models/Lesson');

/**
 * POST /
 * Lesson.
 */
exports.postLesson = (req, res) => {
  req.assert('lessonName', 'Lesson name cannot be blank').notEmpty();
  req.assert('lessonDescription', 'Lesson description cannot be blank').notEmpty();
  const errors = req.validationErrors();
  if (errors) {
    req.flash('errors', errors);
    return res.redirect('admin/lesson-form');
  }

  const lesson = new Lesson({
    name: req.body.lessonName,
    description: req.body.lessonDescription
  });

  lesson.save();
};