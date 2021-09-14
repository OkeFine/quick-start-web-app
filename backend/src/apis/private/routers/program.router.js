import express from 'express';
import programController from '../controllers/program.controller';

const programRouter = express.Router();

programRouter.post('/', async (req, res, next) => {
  programController.create(req, res, next);
});
programRouter.delete('/:id', async (req, res, next) => {
  programController.delete(req, res, next);
});

export default programRouter;
