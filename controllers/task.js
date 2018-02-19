const Task = require('../models/Task');
const Lesson = require('../models/Lesson');

/**
 * Post khjkhkhkh
 * 
 */
exports.taskDetailedPage = (req, res) => {
  Task.findOne({ _id: req.params.id }, (err, task) => {
    if (err) {
      // res.render('error', {});
      // req.flash('errors', { msg: 'Account with that email address already exists.' });
    }
    if (task) {
      return res.render('task', {
        title: 'Task ',
        task: this
      });
    }
  });
};

exports.taskEditPage = (req, res) => {
  Task.findOne({ _id: req.params.id }, (err, task) => {
    Lesson.find()
      .then((lesson) => {
        if (err) {
          // res.render('error', {});
          // req.flash('errors', { msg: 'Account with that email address already exists.' });
        }
        if (task) {
          return res.render('admin/task-edit', {
            title: 'Edit lesson ',
            taskId: req.params.id,
            taskName: task.name,
            taskDescription: task.description,
            taskTests: task.tests,
            lessonId: task.lessonId,
            db: lesson
          });
        }
      });
  });
};
