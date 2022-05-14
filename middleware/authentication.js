const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { UnthenticatedError } = require('../errors');

const auth = (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnthenticatedError('Authorization header is missing or invalid');
  }

  const token = authHeader.replace('Bearer ', '');
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {userId: decoded.userId, name: decoded.name};
    next();
  } catch (error) {
    throw new UnthenticatedError('Authentication failed');
  }
}

module.exports = auth;