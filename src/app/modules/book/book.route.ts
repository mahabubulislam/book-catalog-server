import { Router } from 'express';
import { bookController } from './book.controller';

const router = Router();
router.get('/', bookController.getAllBooks);
router.post('/create-book', bookController.createBook);
router.get('/:id', bookController.getSingleBook);
router.patch('/:id', bookController.updateBook);
router.patch('/add-review/:id', bookController.addReview);
router.delete('/:id', bookController.deleteBook);

export const bookRoutes = router;
