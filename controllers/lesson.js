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

/*exports.postUpdateProfile = (req, res, next) => {
  req.assert('email', 'Please enter a valid email address.').isEmail();
  req.sanitize('email').normalizeEmail({ gmail_remove_dots: false });

  const errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/account');
  }

  User.findById(req.user.id, (err, user) => {
    if (err) { return next(err); }
    user.email = req.body.email || '';
    user.profile.name = req.body.name || '';
    user.profile.gender = req.body.gender || '';
    user.profile.location = req.body.location || '';
    user.profile.website = req.body.website || '';
    user.save((err) => {
      if (err) {
        if (err.code === 11000) {
          req.flash('errors', { msg: 'The email address you have entered is already associated with an account.' });
          return res.redirect('/account');
        }
        return next(err);
      }
      req.flash('success', { msg: 'Profile information has been updated.' });
      res.redirect('/account');
    });
  });
};*/