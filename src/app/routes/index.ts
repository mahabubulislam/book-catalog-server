import { Router } from 'express';
import { authRoutes } from '../modules/auth/auth.route';
import { bookRoutes } from '../modules/book/book.route';

const router = Router();
router.use('/book', bookRoutes);
router.use('/auth', authRoutes);
export default router;
