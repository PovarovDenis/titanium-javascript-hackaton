const Task = require('../models/Task');
const Lesson = require('../models/Lesson');
// const request = require('request');

/**
 * GET /task/:id
 * Task detailed page.
 */
exports.taskDetailedPage = (req, res) => {
  Task.findOne({ _id: req.params.id }, (err, task) => {
    if (err) {
      // res.render('error', {});
      // req.flash('errors', { msg: 'Account with that email address already exists.' });
    }
    if (task) {
      return res.render('task', {
        title: 'Task ',
        task
      });
    }
  });
};

/**
 * GET admin/task-form/edit/:id
 * Task edit page.
 */
exports.taskEditPage = (req, res) => {
  Task.findOne({ _id: req.params.id }, (err, task) => {
    Lesson.find()
      .then((lesson) => {
        if (err) {
          // res.render('error', {});
          // req.flash('errors', { msg: 'Account with that email address already exists.' });
        }
        if (task) {
          return res.render('admin/task-edit', {
            title: 'Edit lesson ',
            taskId: req.params.id,
            taskName: task.name,
            taskDescription: task.description,
            taskTests: task.tests,
            lessonId: task.lessonId,
            db: lesson
          });
        }
      });
  });
};

/**
 * POST http://78.46.208.140:3031
 * Checking the solution with Node.js request module.
 * DEPRECATED, BECAUSE AJAX WAS IMPLEMENTED ON CLIENT SIDE !!!
 */ /*
exports.checkTaskSolution = (req, res) => {
  request({ method: 'POST',
    uri: 'http://78.46.208.140:3031',
    multipart: [{ 'content-type': 'application/json',
      body: JSON.stringify({ solution: req.body.solution, test: req.body.test })
    }]
  }, (err, httpRes, body) => {
    if (err) { console.log(err); }
    if (httpRes.statusCode === 201) {
      console.log('✓ Solution uploaded at http://78.46.208.140:3031');
    } else {
      console.log('✗ Upload failed! statusCode = ', httpRes.statusCode);
      JSON.parse(body, (parsedKey, parsedValue) => {
        console.log(parsedKey, ': ', parsedValue);
        return parsedValue;
      });
    }
  });
  // res.render
};
*/
