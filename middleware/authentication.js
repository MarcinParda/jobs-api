const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnthenticatedError("Authorization header is missing or invalid");
  }
  const token = authHeader.split(" ")[1];

  if (!token) {
    throw new UnauthenticatedError(
      "Authorization header is missing or invalid"
    );
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: decoded.userId, name: decoded.name };
    next();
  } catch (error) {
    throw new UnthenticatedError("Authentication failed");
  }
};

module.exports = authenticateUser;
