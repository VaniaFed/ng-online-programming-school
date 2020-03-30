const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  fullName: String,
  login: String,
  pwd: String,
  courses: [String]
});

module.exports = mongoose.model('User', UserSchema);
