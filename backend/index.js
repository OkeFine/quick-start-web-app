import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import { handleError, ValidError } from './src/utils/errorHelpers';
import apiPublicRouter from './src/apis/public/routers';
import apiPrivateRouter from './src/apis/private/routers';
import verifyToken from './src/middlewares/auth';

dotenv.config();

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  express.static(path.join(__dirname, 'src/public'), {
    maxAge: 86400000 * 30,
  })
);

// Public routes
app.use('/', apiPublicRouter);

// Private routes
app.use('/private', [verifyToken], apiPrivateRouter);

// default route
app.use('/', () => {
  throw new ValidError(404, 'NOT FOUND!');
});

// Error handler for Joi
app.use((err, req, res, next) => {
  if (err && err.error && err.error.isJoi) {
    // we had a joi error, let's return a custom 400 json response
    const statusCode = 400;
    res.status(statusCode).json({
      type: err.type, // will be "query" here, but could be "headers", "body", or "params"
      message: err.error.toString()
    });
  } else {
    // pass on to another error handler
    next(err);
  }
});

// Error handler
app.use((err, req, res, next) => {
  handleError(err, req, res, next);
});

// Start  API
const runProdOptions = {
  // key: process.env.SERVER_KEY,
  // cert: process.env.SERVER_CERT,
  port: process.env.PORT || 8080,
};

console.log('===> API server listen at port', process.env.PORT);
console.log('process.env', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  app.listen(runProdOptions, () => {
    console.log('server runing prod mode', process.env.PORT || 8080);
  });
} else {
  app.listen(process.env.PORT || 8080, () => {
    console.log('server runing dev mode', process.env.PORT || 8080);
  });
}