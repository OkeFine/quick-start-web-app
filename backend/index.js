import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import { handleError, ErrorHandler } from './src/utils/errorHelpers';
import apiPublicRouter from './src/apis/public/routers';
import apiPrivateRouter from './src/apis/private/routers';

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
app.use('/private', apiPrivateRouter);

// default route
app.use('/', () => {
  throw new ErrorHandler(404, 'NOT FOUND!');
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
if (process.env === 'production') {
  app.listen(runProdOptions, () => {
    console.log('server runing prod mode', process.env.PORT || 8080);
  });
} else {
  app.listen(process.env.PORT || 8080, () => {
    console.log('server runing dev mode', process.env.PORT || 8080);
  });
}