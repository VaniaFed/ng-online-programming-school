const express = require('express');
const router = express.Router();

router.get('/courses/', (req, res) => {
  const courses = [
    {
      id: '1',
      name: 'React course',
      price: '$20'
    },
    {
      id: '2',
      name: 'Angular course',
      price: '$40'
    },
    {
      id: '3',
      name: 'Vue course',
      price: '$60'
    },
  ];
  res.status(200).json(courses);
});

router.get('/courses/:id', (req, res) => {
  const courses = [
    {
      id: '1',
      name: 'React course',
      price: '$20'
    },
    {
      id: '2',
      name: 'Angular course',
      price: '$40'
    },
    {
      id: '3',
      name: 'Vue course',
      price: '$60'
    },
  ];
  const courseId = req.params.id;
  const targetCourse = courses.filter(course => course.id === courseId)[0];
  res.status(200).json(targetCourse);
});

module.exports = router;
