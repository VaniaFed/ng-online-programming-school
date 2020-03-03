const express = require('express');
const router = express.Router();

router.use('/',
  [
    require('./courses.routes'),
    require('./students.routes')
  ]);

module.exports = router;
