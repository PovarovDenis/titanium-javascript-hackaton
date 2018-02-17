/**
 * GET /
 * Detail of Task.
 */
const Details = require('../models/TaskDetailController.js');

exports.getDetails = (req, res) => {
 Details.findOne((err, TaskId) => {
    res.render('Details', { task: TaskId });
  });
}; 