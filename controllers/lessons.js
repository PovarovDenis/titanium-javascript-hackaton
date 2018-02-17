exports.ListOfLessons = (req, res) => {
  res.render('admin/lessonsList/lessonsList', {
    title: 'ShowLessons'
  });
};