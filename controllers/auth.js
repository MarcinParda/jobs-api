const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const { BadReqeustError, BadRequestError } = require('../errors');

const register = async (req, res) => {
  const user = await User.create({...req.body});
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({token, user: {name: user.name}});
};

const login = async (req, res) => {
  res.send('login user');
}; 

module.exports = {
  register,
  login,
};
