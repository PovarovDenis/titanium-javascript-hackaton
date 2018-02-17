/**
 * GET /
 * TaskDetailView.
 */
const Details = require('../models/TaskDetailController.js');

exports.getDetails = (req, res) => {
    res.render('../views/admin/TaskDetailController/TaskDetailController.pug', {
      title: 'Task Detail View'
    });
  };
  