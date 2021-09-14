import { MESSAGE } from './contants';

export class ValidError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

// eslint-disable-next-line no-unused-vars
export const handleError = (err, req, res, next) => {
  const { statusCode = 500, message = MESSAGE.SERVER_ERROR } = err;
  if (process.env.NODE_ENV === 'production') {
    // do some notification to administrator
  }
  res.status(statusCode).json({
    message,
  });
};