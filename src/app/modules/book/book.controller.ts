import { Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../shared/catchAsync'
import sendResponse from '../../shared/sendResponse'
import { bookService } from './book.service'

const createBook = catchAsync(async (req: Request, res: Response) => {
  const book = req.body
  const result = await bookService.createBook(book)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Book Created Successfully',
    data: result
  })
})

export const bookController = {
  createBook
}
