import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { ValidError } from '../../../utils/errorHelpers';
// @ts-ignore
import { User, Role } from '../../../db/models';

class authController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: { email },
        include: [{
          model: Role,
          as: 'role',
          attributes: ['id', 'name']
        }]
      });

      if (user) {
        const isCorrectPassword = bcrypt.compareSync(password, user.password);
        if (isCorrectPassword) {
          const token = jwt.sign(
            {
              email: user.email,
              firstName: user.firstName,
              roleId: user.roleId,
              userId: user.id,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: '30d',
            }
          );
          return res.json({ user, token });
        }
      }
      throw new ValidError(403, 'Email or Password is incorrect');
    } catch (error) {
      return next(error);
    }
  }

  static async getInfoByToken(req, res, next) {
    try {
      // renew token
      const { userId } = req.decoded;
      const user = await User.findOne({
        where: { id: userId },
        include: [{
          model: Role,
          as: 'role',
          attributes: ['id', 'name']
        }]
      });
      if (user) {
        const token = jwt.sign(
          {
            email: user.email,
            firstName: user.firstName,
            roleId: user.roleId,
            userId: user.id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: '30d',
          }
        );
        return res.json({ user, token });
      }
      throw new ValidError(403, 'Account does not exist or deleted');
    } catch (error) {
      return next(error);
    }
  }

  // @ts-ignore
  static async register(req, res, next) {
    try {
      return res.json({
        data: { todo: 'Register' },
      });
    } catch (error) {
      return next(error);
    }
  }

  // @ts-ignore
  static async recoverPassword(req, res, next) {
    try {
      return res.json({
        data: { todo: 'Recover Password' },
      });
    } catch (error) {
      return next(error);
    }
  }
}

export default authController;