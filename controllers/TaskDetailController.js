/**
 * GET /
 * Detail of Task.
 */
const Details = require('../models/TaskDetailController.js');

exports.getDetails = (req, res) => {
  Details.find((err, TaskId) => {
    res.render('Details', { task: TaskId });
  });
  };
  