/**
 * GET /
 * admin page.
 */
exports.adminPage = (req, res) => {
  res.render('admin/admin', {
    title: 'Adminpanel'
  });
};

/**
 * GET /
 * admin/lesson-form page.
 */
exports.lessonFormPage = (req, res) => {
  res.render('admin/lesson-form', {
    title: 'Adminpanel'
  });
};

/**
 * GET /
 * admin/task-form page.
 */
exports.taskFormPage = (req, res) => {
  res.render('admin/task-form', {
    title: 'Adminpanel'
  });
};
