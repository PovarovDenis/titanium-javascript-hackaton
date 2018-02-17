/**
 * GET /
 * Admin page.
 */
exports.index = (req, res) => {
  res.render('admin/admin', {
    title: 'Adminpanel'
  });
};
