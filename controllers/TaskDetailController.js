/**
 * GET /
 * Detail of Task.
 */
const Details = require('../models/TaskDetailController.js');

exports.getDetails = (req, res) => {
  Book.find((err, docs) => {
    res.render('Details', { Details: docs });
  });
  };
  