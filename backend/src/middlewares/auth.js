import jwt from 'jsonwebtoken';
import { ValidError } from '../utils/errorHelpers';

function verifyToken(req, res, next) {
  try {
    const token = req.headers.authorization.replace('Bearer ', '');

    if (!token) {
      throw new ValidError(403, 'No token provided');
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        throw new ValidError(401, 'Unauthorized');
      }
      req.decoded = decoded;
      req.token = token;
      next();
    });
  } catch (err) {
    next(err);
  }
}

export default verifyToken;