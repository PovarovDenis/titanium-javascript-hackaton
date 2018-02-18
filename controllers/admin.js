const Lesson = require('../models/Lesson');

/**
 * GET /
 * admin page.
 */
exports.adminPage = (req, res) => {
  Lesson.find()
    .then((lesson) => {
      res.render('admin/admin', {
        title: 'Adminpanel',
        db: lesson
      });
    });
};

/**
 * GET /
 * admin/lesson-form page.
 */
exports.lessonFormPage = (req, res) => {
  res.render('admin/lesson-form', {
    title: 'Adminpanel'
  });
};

/**
 * GET /
 * admin/task-form page.
 */
exports.taskFormPage = (req, res) => {
  res.render('admin/task-form', {
    title: 'Adminpanel'
  });
};
