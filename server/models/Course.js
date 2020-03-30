const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
  name: String,
  description: String,
  price: String,
  imgSrc: String
});

module.exports = mongoose.model('Course', CourseSchema);
