const express = require('express');
const router = express.Router();

router.get('/students', (req, res) => {
  const students = [
    {
      id: 1,
      fullName: 'Ivan',
      course: 'Angular'
    },
    {
      id: 2,
      fullName: 'Roman',
      course: 'React'
    },
    {
      id: 3,
      fullName: 'Vladimir',
      course: 'Vue'
    }
  ];
  res.status(200).json(students);
});

router.post('/add-student/', (req, res) => {
  const student = req.body;
  console.log(student);
  // TODO: put a student to DB
  const status = {
    success: true,
    err: null,
  };
  res.status(200).json(status);
});

module.exports = router;

