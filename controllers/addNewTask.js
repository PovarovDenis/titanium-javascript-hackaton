const Task = require('../models/TaskForm');


/**
 * GET /
 * newTask
 */
exports.addNewTaskController = (req, res) => {
    console.log('reeqqqqqqqq', req.body);
    // res.send('Hellllllllo')
    res.render('admin/taskForm/taskForm.pug', {
        
    });
};

exports.create = (req, res) => {
    const task = new Task({
        taskName: req.body.taskName,
        task: req.body.task,
        taskDesc: req.body.taskDesc,
      });

      task.save({task: 'task'});
      Task.findOne({taskName: req.body.taskName});
      Task.findOne({task: req.body.task});
      Task.findOne({taskDesc: req.body.taskDesc});
    res.render('admin/taskForm/taskForm.pug', {
        
    });
};