const express = require('express');
const router = express.Router();

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

module.exports = router;

