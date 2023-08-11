import { Router } from 'express';
import { userController } from '../user/user.controller';
import { authController } from './auth.controller';

const router = Router();
router.use('/create-user', userController.createUser);
router.use('/login', authController.loginUser);
export const authRoutes = router;
