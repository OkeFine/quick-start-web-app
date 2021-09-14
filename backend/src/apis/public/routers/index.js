import express from 'express';
import userRouter from './user.router';

const router = express.Router();

// define routes
router.use('/user', userRouter);

export default router;