/**
 * GET /
 * TaskDetailView.
 */
const Details = require('../models/TaskDetailController.js');

exports.getDetails = (req, res) => {
    res.render('/controllers/TaskDetailController', {
      title: 'Task Detail View'
    });
  };
  