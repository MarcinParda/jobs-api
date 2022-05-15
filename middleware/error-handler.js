const { CustomAPIError } = require('../errors');
const { StatusCodes } = require('http-status-codes');
const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Internal server error',
  };

  console.log(err.code, err.keyValue);

  if (err.name === 'ValidationError') {
    customError.msg = Object.values(err.errors)
      .map((error) => error.message)
      .join(', ');
    customError.statusCode = 400;
  }

  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field please enter a unique value`;
    customError.statusCode = 400;
  }

  if (err.name === 'CastError') {
    customError.msg = `${err.value} is not a valid ${err.kind}`;
    customError.statusCode = 404;
  }

  return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandlerMiddleware;
