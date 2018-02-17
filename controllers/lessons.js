exports.ListOfLessons = (req, res) => {
  console.log('get lessons')
  res.render('./llessons/lessonsList/lessonsList.pug', {
    title: 'ShowLessons',
    lessons: [
      {
        name: 'Lesson 1',
        description: 'Desc'
      }
    ]
  });
};