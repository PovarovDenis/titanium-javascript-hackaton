const Lesson = require('../models/Lesson');
const Task = require('../models/Task');

/**
 * GET /
 * admin page.
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
  Lesson.find()
    .then((lesson) => {
      res.render('admin/task-form', {
        title: 'Adminpanel',
        db: lesson
      });
    });
};

/**
 * New POST lesson method/
 * Creating and editing lessons
 */
exports.postController = (req, res) => {
  console.log(req.body.action);
  console.log(req.body.lessonId);
  console.log(req.body.taskId);
  // Dunno why "switch (req.body.action)" doesnt work
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

  /*}
  if (req.body.action === 'lesson-form') {
    newLesson (req.body.lessonId)
  }
  req.assert('lessonName', 'Lesson name cannot be blank').notEmpty();
  req.assert('lessonDescription', 'Lesson description cannot be blank').notEmpty();
  // const errors = req.validationErrors();
  // if (errors) { req.flash('errors', errors); return res.redirect('admin/lesson-form'); }
  if (req.body.lessonId === undefined) {
    const lesson = new Lesson({
      name: req.body.lessonName,
      description: req.body.lessonDescription
    });
    lesson.save();
  } else {
    Lesson.updateOne(
      { _id: req.body.lessonId },
      { $set: { name: req.body.lessonName, description: req.body.lessonDescription } })
      .then((err) => { /*process result*/ /*});
  }
  return res.redirect('admin');
  //res.render('admin/succes', { msg: 'Lesson creation succeseful' });
};*/
