const express = require('express');
const router = express.Router();

router.get('/lessons/:id', (req, res) => {
  console.log('in lessons');
  const id = req.params.id;
  const lessons = [
    {
      id: 1,
      name: 'Introduction',
      description: 'Here we go',
      textContent: 'so long',
      courseId: '1'
    },
    {
      id: 2,
      name: 'Components',
      description: 'Components are amazing',
      textContent: 'so long',
      courseId: '1'
    },
    {
      id: 3,
      name: 'Services',
      description: 'service is a good thing',
      textContent: 'so long',
      courseId: '1'
    }
  ];

  const lesson = lessons.filter(lesson => String(lesson.id) === String(id))[0];
  res.status(200).json(lesson);
});

router.post('/add-lesson/', (req, res) => {
  const lesson = req.body;
  console.log(lesson);
  // TODO: put a student to DB
  const status = {
    success: true,
    err: null,
  };
  res.status(200).json(status);
});

router.post('/edit-lesson/', (req, res) => {
  const lesson = req.body;
  console.log('editing: ', lesson);
  // TODO: put a course to DB
  const status = {
    success: true,
    err: null,
  };
  setTimeout(() => {
    res.status(200).json(status);
  }, 1000);
});

module.exports = router;

