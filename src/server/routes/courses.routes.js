const express = require('express');
const router = express.Router();

router.get('/courses/', (req, res) => {
  const courses = [
    {
      id: '1',
      name: 'React course',
      price: '$20'
    }
  ];
  res.status(200).json(courses);
});

module.exports = router;
