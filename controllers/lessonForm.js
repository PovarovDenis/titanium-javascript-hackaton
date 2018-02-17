exports.sendForm = (req, res) => {
    // res.render('./admin/lessonForm/lessonFormSuccesRequest', {
    // });

    res.send(req.body.less_description);
  };

  exports.getTemplate = (req, res) => {
    res.render('./admin/lessonForm/lessonForm.pug', {
        messageLessName: 'Origato',
        messageLessDescription: 'Nagasaki',
        submitText: 'Harakiri'
    });
  };
  