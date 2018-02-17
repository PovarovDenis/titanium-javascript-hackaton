/**
 * GET /
 * Detail of Task.
 */
const Details = require('../models/TaskDetailController.js');

exports.getDetails = (req, res) => {
  Details.findOne({ taskId: req.body.parameters }, (err, existingTask) => {
    if (err) { return (err); }
    if (existingTask) {
      res.render('Details', { Details: existingTask });
    }
  });
  };
  