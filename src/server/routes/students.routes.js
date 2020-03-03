const express = require('express');
const router = express.Router();

router.get('/students', (req, res) => {
  const students = [
    {
      id: 1,
      fullName: 'Ivan',
      course: 'Angular'
    }
  ];
  res.status(200).json(students);
});

module.exports = router;

