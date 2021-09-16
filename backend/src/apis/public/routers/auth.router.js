import express from 'express';
import Joi from 'joi';
import ExpressJoi from 'express-joi-validation';
import authController from '../controllers/auth.controller';
import verifyToken from '../../../middlewares/auth';

const validator = ExpressJoi.createValidator({ passError: true });

// validate request body with Joi
const loginBodySchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const authRouter = express.Router();

authRouter.post('/login', validator.body(loginBodySchema), async (req, res, next) => {
  authController.login(req, res, next);
});
authRouter.post('/token', [verifyToken], async (req, res, next) => {
  authController.getInfoByToken(req, res, next);
});
authRouter.post('/register', async (req, res, next) => {
  authController.register(req, res, next);
});
authRouter.post('/recover-password', async (req, res, next) => {
  authController.recoverPassword(req, res, next);
});

export default authRouter;
