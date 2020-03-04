const express = require('express');
const router = express.Router();

router.get('/courses/', (req, res) => {
  const courses = [
    {
      id: '1',
      name: 'React course',
      price: '$20',
      imgSrc: 'https://s3.tproger.ru/uploads/2016/10/reactmini.png'
    },
    {
      id: '2',
      name: 'Angular course',
      price: '$40',
      imgSrc: 'https://miro.medium.com/max/8192/1*PjxaUpMULTLqXNpqCtz0kg.png'
    },
    {
      id: '3',
      name: 'Vue course',
      price: '$60',
      imgSrc: 'https://media.proglib.io/wp-uploads/2018/07/1_qnI8K0Udjw4lciWDED4HGw.png'
    },
  ];
  res.status(200).json(courses);
});

router.get('/courses/:id', (req, res) => {
  const courses = [
    {
      id: '1',
      name: 'React course',
      price: '$20',
      imgSrc: 'https://s3.tproger.ru/uploads/2016/10/reactmini.png'
    },
    {
      id: '2',
      name: 'Angular course',
      price: '$40',
      imgSrc: 'https://miro.medium.com/max/8192/1*PjxaUpMULTLqXNpqCtz0kg.png'
    },
    {
      id: '3',
      name: 'Vue course',
      price: '$60',
      imgSrc: 'https://media.proglib.io/wp-uploads/2018/07/1_qnI8K0Udjw4lciWDED4HGw.png'
    },
  ];
  const courseId = req.params.id;
  const targetCourse = courses.filter(course => course.id === courseId)[0];
  if (!targetCourse) {
    res.status(300).json('not found');
    return;
  }
  res.status(200).json(targetCourse);
});

router.post('/add-course/', (req, res) => {
  const course = req.body;
  // TODO: put a course to DB
  const status = {
    success: true,
    err: null,
  };
  res.status(200).json(status);
});

router.post('/edit-course/', (req, res) => {
  const course = req.body;
  console.log('editing: ', course);
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
