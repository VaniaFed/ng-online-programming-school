const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/signin', (req, res) => {
  const { login, password } = req.body;
  console.log(req.headers);
  res.status(200).json({
    idToken: '2013.932432.329293.324242',
    expiresIn: '05.06.2020'
  });
});

module.exports = router;
