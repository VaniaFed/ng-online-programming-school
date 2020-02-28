const express = require('express');
const router = express.Router();

router.use('/', require('./courses.routes'));

module.exports = router;
