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

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const result = await bookService.getAllBooks()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book Retrieved Successfully',
    data: result
  })
})
const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await bookService.getSingleBook(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book Retrieved Successfully',
    data: result
  })
})
const updateBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const payload = req.body
  const result = await bookService.updateBook(id, payload)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book Updated Successfully',
    data: result
  })
})
const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  await bookService.deleteBook(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book Deleted Successfully',
    data: null
  })
})

export const bookController = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook
}
