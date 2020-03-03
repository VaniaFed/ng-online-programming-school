const express = require('express');
const router = express.Router();

router.use('/', require('./courses.routes'));
// TODO: make the get/post routes for students

module.exports = router;
