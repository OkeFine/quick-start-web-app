import express from 'express';
import authRouter from './auth.router';

const router = express.Router();

// define routes
router.use('/auth', authRouter);

export default router;