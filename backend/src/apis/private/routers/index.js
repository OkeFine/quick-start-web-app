// @ts-nocheck
import express from 'express';
import programRouter from './program.router';

const router = express.Router();

// define routes
router.use('/program', programRouter);

export default router;