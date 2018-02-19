const Lesson = require('../models/Lesson');

/**
 * New POST lesson method/
 * Creating and editing lessons
 */
exports.postLesson = (req, res) => {
  req.assert('lessonName', 'Lesson name cannot be blank').notEmpty();
  req.assert('lessonDescription', 'Lesson description cannot be blank').notEmpty();
  // const errors = req.validationErrors();
  // if (errors) { req.flash('errors', errors); return res.redirect('admin/lesson-form'); }
  if (req.body.lessonId === undefined) {
    const lesson = new Lesson({
      name: req.body.lessonName,
      description: req.body.lessonDescription
    });
    lesson.save();
  } else {
    Lesson.updateOne(
      { _id: req.body.lessonId },
      { $set: { name: req.body.lessonName, description: req.body.lessonDescription } })
      .then((err) => { /*process result*/ });
  }
  return res.redirect('admin');
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
        lessonId: req.params.id,
        lessonName: lesson.name,
        lessonDescription: lesson.description
      });
    }
  });
};

/*exports.editLesson = (req, res) => {
  req.assert('lessonName', 'Lesson name cannot be blank').notEmpty();
  req.assert('lessonDescription', 'Lesson description cannot be blank').notEmpty();
  console.log(req.params.id);
  Lesson.findOneAndRemove({ _id: req.params.id }, (err, lesson) => {
    if (err) {
      //res.render('error', {});
      //req.flash('errors', { msg: 'Account with that email address already exists.' });
    }
    if (lesson) {
      console.log(lesson);
      lesson.name = req.body.lessonName;
      lesson.description = req.body.lessonDescription;
      console.log('update #{lesson}');
      lesson.update();
      res.redirect('admin');
    }
  });
};




  /*
  Lesson.updateOne(
    { _id: req.params.id },
    { name: req.body.lessonName, description: req.body.lessonDescription }, 
  );
  res.redirect('admin');
};

/*  //req.newData.name = req.body.lessonName;
  //req.newData.description = req.body.lessonDescription;
  Lesson.findOneAndReplace({ _id: req.params.id },
    // { $set: { name: req.body.lessonName, description: req.body.lessonDescription } },
    { name: req.body.lessonName, description: req.body.lessonDescription },
    { upsert: false,
      returnNewDocument: false },
    (err, lesson) => {
    // if (err) return res.send(500, { error: err });
      if (lesson) return res.redirect('admin');
    });
};

  /*Lesson.findOne({ _id: req.params.id }, (err, lesson) => {
    if (err) {
      //res.render('error', {});
      //req.flash('errors', { msg: 'Account with that email address already exists.' });
    }
    if (lesson) {
      lesson.name = req.body.lessonName;
      lesson.description = req.body.lessonDescription;
      lesson.update();
      return res.redirect('admin');
    }
  });*/

