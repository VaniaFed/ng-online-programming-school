const express = require('express');
const router = express.Router();
const lessonsService = require('../services/').lessonsService;

router.get('/lessons/', async (req, res) => {
  await lessonsService.getLessons(req, res);
});

router.get('/lessons/:id', async (req, res) => {
  await lessonsService.getLessonById(req, res);
});

router.post('/add-lesson/', async (req, res) => {
  await lessonsService.addLesson(req, res);
});

// router.patch('/edit-lesson/', async (req, res) => {
//   await lessonsService.editLesson(req, res);
// });

module.exports = router;

