const express = require('express');
const router = express.Router();
const usersService = require('../services/users');

router.get('/students', async (req, res) => {
  await usersService.getUsers(req, res);
});

router.post('/add-student/', (req, res) => {
  const student = req.body;
  const status = {
    success: true,
    err: null,
  };
  res.status(200).json(status);
});

module.exports = router;

