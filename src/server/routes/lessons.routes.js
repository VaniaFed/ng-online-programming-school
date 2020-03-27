const express = require('express');
const router = express.Router();

const lessons = [
  {
    id: 1,
    name: 'Introduction',
    description: 'There are many variations of passages of Lorem Ipsum available.',
    videoUrl: 'EAONyIKrZN0',
    textContent: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
    courseId: '1'
  },
  {
    id: 2,
    name: 'Components',
    description: 'Components are amazing',
    videoUrl: 'fd2Cayhez58',
    textContent: 'so long',
    courseId: '1'
  },
  {
    id: 3,
    name: 'Services',
    description: 'service is a good thing',
    videoUrl: 'pwuGBvOPFYI',
    textContent: 'so long',
    courseId: '1'
  }
];

router.get('/lessons/:id', (req, res) => {
  console.log('in lessons');
  const id = req.params.id;

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

