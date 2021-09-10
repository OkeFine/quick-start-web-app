import express from 'express';
import programRouter from './program.router';

const routers = express.Router();

// define routes
routers.use('/program', programRouter);

module.exports = routers;