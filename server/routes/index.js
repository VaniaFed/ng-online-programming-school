const express = require('express');
const router = express.Router();

router.use('/', [
  require('./students.routes'),
  require('./courses.routes'),
  require('./lessons.routes'),
  require('./auth.routes'),
]);

module.exports = router;
