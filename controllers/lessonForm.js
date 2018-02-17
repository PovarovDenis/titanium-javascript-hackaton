const Lesson = require('../models/Lessons');


exports.sendForm = (req, res) => {
    // res.render('./admin/lessonForm/lessonFormSuccesRequest', {
    // });
    // mongoose.connect("mongodb://localhost:27017/lessons");

    const lesson = new Lesson({
        lessonName: req.body.less_name,
        lessonDescription: req.body.less_description
      });

      Lesson.findOne({lessonName: req.body.less_name},function(err,existingLesson){
        if (existingLesson) {
            res.send("There are already exists that lesson name")
        }else{
            Lesson.create(lesson, function(err){
                if(err) return console.log(err);
                res.redirect('/lessons');
                
              });
        }
      })

      
    
    
  };

  exports.getTemplate = (req, res) => {
    res.render('./admin/lessonForm/lessonForm.pug', {
        messageLessName: 'Name: ',
        messageLessDescription: 'Description: ',
        submitText: 'Send'
    });
  };
  