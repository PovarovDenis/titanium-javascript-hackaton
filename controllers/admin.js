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
            title: 'Adminpanel',
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
    title: 'Adminpanel'
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
        title: 'Adminpanel',
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
    console.log('// newLesson();');
    const lesson = new Lesson({ name: req.body.lessonName,
      description: req.body.lessonDescription });
    lesson.save();
  } else
  if (req.body.action === 'lesson-edit') {
    console.log('// editLesson(req.body.lessonId);');
    Lesson.updateOne({ _id: req.body.lessonId },
      { $set: { name: req.body.lessonName, description: req.body.lessonDescription } })
      .then((res) => { console.log(res); });
  } else
  if (req.body.action === 'task-form') {
    console.log('// newTask();');
    const task = new Task({ name: req.body.taskName,
      description: req.body.taskDescription,
      tests: req.body.taskTests,
      lessonId: req.body.selectLessonId });
    task.save();
  } else
  if (req.body.action === 'task-edit') {
    console.log('// editTask(req.body.taskId);');
    Task.updateOne({ _id: req.body.taskId },
      { $set: { name: req.body.taskName,
        description: req.body.taskDescription,
        tests: req.body.taskTests,
        lessonId: req.body.selectLessonId } })
      .then((res) => { console.log(res); });
  }
  return res.redirect('admin');
  // res.render('admin/succes', { msg: 'Lesson creation succeseful' });
};
