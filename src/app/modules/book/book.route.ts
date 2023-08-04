import { Router } from 'express'
import { bookController } from './book.controller'

const router = Router()

router.post('/create-book', bookController.createBook)

export const bookRoutes = router
