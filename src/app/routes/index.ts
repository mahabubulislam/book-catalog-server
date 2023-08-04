import { Router } from 'express'
import { bookRoutes } from '../modules/book/book.route'

const router = Router()
router.use('/book', bookRoutes)
export default router
