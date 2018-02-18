const Lesson = require('../models/Lesson');

/**
 * POST /
 * Lesson.
 */
exports.postLesson = (req, res) => {
  req.assert('lessonName', 'Lesson name cannot be blank').notEmpty();
  req.assert('lessonDescription', 'Lesson description cannot be blank').notEmpty();
  const errors = req.validationErrors();
  if (errors) {
    req.flash('errors', errors);
    return res.redirect('admin/lesson-form');
  }
  const lesson = new Lesson({
    name: req.body.lessonName,
    description: req.body.lessonDescription
  });
  lesson.save();
  return res.redirect('admin');
  /*Lesson.find()
    //.then((lesson) => {
      res.render('lesson', {
        title: 'Lesson creation succeseful',
        msg: 'Lesson creation succeseful',
        lessonName: lesson.name,
        lessonDescription: lesson.description
      }
    //);
    //});*/
  //res.render('admin/succes', { msg: 'Lesson creation succeseful' });
};

/**
 * GET /
 * lessons page.
 */
exports.lessonsPage = (req, res) => {
  Lesson.find()
    .then((lesson) => {
      res.render('lessons', {
        title: 'Lessons',
        db: lesson
      });
    });
};

/**
 *  GET /
 * lesson detailed page.
 */
exports.lessonDetailedPage = (req, res) => {
  Lesson.findOne({ _id: req.params.id }, (err, lesson) => {
    if (err) {
      //res.render('error', {});
      //req.flash('errors', { msg: 'Account with that email address already exists.' });
    }
    if (lesson) {
      return res.render('lesson', {
        title: 'Lesson ',
        lesson: this
      });
    }
  });
};

exports.lessonEditPage = (req, res) => {
  Lesson.findOne({ _id: req.params.id }, (err, lesson) => {
    if (err) {
      //res.render('error', {});
      //req.flash('errors', { msg: 'Account with that email address already exists.' });
    }
    if (lesson) {
      return res.render('admin/lesson-edit', {
        title: 'Edit lesson ',
        lessonName: lesson.name,
        lessonDescription: lesson.description
      });
    }
  });
};

exports.editLesson = (req, res) => {
  req.assert('lessonName', 'Lesson name cannot be blank').notEmpty();
  req.assert('lessonDescription', 'Lesson description cannot be blank').notEmpty();
  Lesson.findOne({ _id: req.params.id }, (err, lesson) => {
    if (err) {
      //res.render('error', {});
      //req.flash('errors', { msg: 'Account with that email address already exists.' });
    }
    if (lesson) {
      lesson.name = req.body.lessonName;
      lesson.description = req.body.lessonDescription;
      return res.redirect('admin');
    }
  });
};

