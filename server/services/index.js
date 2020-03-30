require('./mongo').connect();
const lessonsService = require('./lessons');
const coursesService = require('./courses');
const usersService = require('./users');

module.exports = {
  lessonsService,
  coursesService,
  usersService
};
