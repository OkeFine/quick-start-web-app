import { MESSAGE } from './contants';

class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

// eslint-disable-next-line no-unused-vars
const handleError = (err, req, res, next) => {
  const { statusCode = 500, message = MESSAGE.SERVER_ERROR } = err;
  if (process.env.NODE_ENV === 'production') {
    // do some notification to administrator
  }
  res.status(statusCode).json({
    error: true,
    statusCode,
    message,
  });
};

module.exports = {
  ErrorHandler,
  handleError,
};
