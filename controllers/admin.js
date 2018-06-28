const Lesson = require('../models/Lesson');
const Task = require('../models/Task');

/**
 * GET /admin
 * Admin panel.
 */
exports.adminPage = (req, res) => {
  Lesson.find()
    .then((lesson) => {
      Task.find()
        .then((task) => {
          res.render('admin/admin', {
            title: 'Admin panel',
            lessonDB: lesson,
            taskDB: task
          });
        });
    });
};

/**
 * GET /admin/lesson-form
 * Lesson-form page.
 */
exports.lessonFormPage = (req, res) => {
  res.render('admin/lesson-form', {
    title: 'Admin panel'
  });
};

/**
 * GET /admin/task-form
 * Task-form page.
 */
exports.taskFormPage = (req, res) => {
  Lesson.find()
    .then((lesson) => {
      res.render('admin/task-form', {
        title: 'Admin panel',
        db: lesson
      });
    });
};

/**
 * POST /admin
 * Universal POST method
 */
exports.postController = (req, res) => {
  if (req.body.action === 'lesson-form') {
    const lesson = new Lesson({ name: req.body.lessonName,
      description: req.body.lessonDescription });
    lesson.save();
    // req.flash('success', { msg: 'Your Lesson was saved successfully' });
  } else
  if (req.body.action === 'lesson-edit') {
    Lesson.updateOne({ _id: req.body.lessonId },
      { $set: { name: req.body.lessonName, description: req.body.lessonDescription } });
    // .then((res) => { req.flash('success', { msg: res }); });
  } else
  if (req.body.action === 'task-form') {
    const task = new Task({ name: req.body.taskName,
      description: req.body.taskDescription,
      tests: req.body.taskTests,
      lessonId: req.body.selectLessonId });
    task.save();
  } else
  if (req.body.action === 'task-edit') {
    Task.updateOne({ _id: req.body.taskId },
      { $set: { name: req.body.taskName,
        description: req.body.taskDescription,
        tests: req.body.taskTests,
        lessonId: req.body.selectLessonId } });
    // .then((res) => { console.log(res); });
  }
  return res.redirect('admin');
};
