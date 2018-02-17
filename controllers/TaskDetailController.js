/**
 * GET /
 * TaskDetailView.
 */
const Details = require('../models/TaskDetailView.js');

exports.getDetails = (req, res) => {
    res.render('/controllers/TaskDetailController', {
      title: 'Task Detail View'
    });
  };
  