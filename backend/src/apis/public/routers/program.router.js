import express from 'express';
import programController from '../controllers/program.controller';

const programRouter = express.Router();

programRouter.get('/', async (req, res, next) => {
  programController.getList(req, res, next);
});
programRouter.get('/:id', async (req, res, next) => {
  programController.getById(req, res, next);
});

module.exports = programRouter;
