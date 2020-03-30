const Lesson = require('../models/Lesson');

const getLessons = async (req, res) => {
  const courseId = req.params.courseId;
  const lessons = await Lesson.find({courseId});
  res.status(200).json(lessons);
};

const getLessonById = async (req, res) => {
  const id = req.params.id;
  const lesson = await Lesson.findOne({_id: id});
  res.status(200).json(lesson);
};

const addLesson = async (req, res) => {
  const body = req.body;
  const lesson = new Lesson(body.lesson);
  lesson.save();
  const status = {
    success: true,
    err: null,
  };
  res.status(200).json(status);
};

module.exports = {
  getLessons,
  getLessonById,
  addLesson
};
