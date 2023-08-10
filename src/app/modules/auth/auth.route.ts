import { Router } from 'express';
import { userController } from '../user/user.controller';

const router = Router();
router.use('/create-user', userController.createUser);
export const authRoutes = router;
