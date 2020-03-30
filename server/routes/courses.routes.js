const express = require('express');
const router = express.Router();
const lessonsService = require('../services').lessonsService;
const coursesService = require('../services').coursesService

router.get('/courses/', async (req, res) => {
  await coursesService.getCourses(req, res);
});

router.get('/courses/:id', async (req, res) => {
  await coursesService.getCourseById(req, res);
});

router.post('/add-course/', async (req, res) => {
  await coursesService.addCourse(req, res);
});

router.get('/courses/:courseId/lessons/', async (req, res) => {
  await lessonsService.getLessons(req, res);
});

router.patch('/edit-course/', async (req, res) => {
  await coursesService.editCourse(req, res);
});

module.exports = router;
