const User = require('../models/User');

const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

const addUser = async (req, res) => {
  const body = req.body;
  const user = new User(body.user);
  user.save();
  const status = {
    success: true,
    err: null,
  };
  res.status(200).json(status);
};

module.exports = {
  getUsers,
  addUser
};
