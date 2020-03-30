const mongoose = require('mongoose');

const LessonSchema = mongoose.Schema({
  name: String,
  description: String,
  videoUrl: String,
  textContent: String,
  courseId: String
});

module.exports = mongoose.model('Lesson', LessonSchema);
