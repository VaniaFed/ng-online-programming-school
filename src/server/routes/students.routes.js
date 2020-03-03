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

module.exports = router;

