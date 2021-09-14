import express from 'express';
import Joi from 'joi';
import ExpressJoi from 'express-joi-validation';
import userController from '../controllers/user.controller';

const validator = ExpressJoi.createValidator({ passError: true });

// validate request body with Joi
const loginBodySchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const userRouter = express.Router();

userRouter.post('/login', validator.body(loginBodySchema), async (req, res, next) => {
  userController.login(req, res, next);
});
userRouter.post('/register', async (req, res, next) => {
  userController.register(req, res, next);
});
userRouter.post('/recover-password', async (req, res, next) => {
  userController.recoverPassword(req, res, next);
});

export default userRouter;
