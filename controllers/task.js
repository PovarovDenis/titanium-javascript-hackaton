const Task = require('../models/Task');

/**
 * POST /
 * Task.
 */
exports.postTask = (req, res) => {
  req.assert('taskName', 'Task name cannot be blank').notEmpty();
  req.assert('taskDescription', 'Task description cannot be blank').notEmpty();
  req.assert('taskTests', 'Task tests cannot be blank').notEmpty();
  req.assert('lessonID', 'Lesson ID tests cannot be blank').notEmpty();
  const errors = req.validationErrors();
  if (errors) {
    req.flash('errors', errors);
    return res.redirect('admin/task-form');
  }

  const task = new Task({
    name: req.body.taskName,
    description: req.body.taskDescription,
    tests: req.body.taskTests,
  });

  task.save();
};

exports.taskDetailedPage = (req, res) => {
  Task.findOne({ _id: req.params.id }, (err, task) => {
    if (err) {
      //res.render('error', {});
      //req.flash('errors', { msg: 'Account with that email address already exists.' });
    }
    if (task) {
      return res.render('task', {
        title: 'Task ',
        task: this
      });
    }
  });
};
