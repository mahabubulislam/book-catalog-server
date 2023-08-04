import { Request, Response } from 'express'
import catchAsync from '../../shared/catchAsync'

const createBook = catchAsync(async (req: Request, res: Response) => {})

export const bookController = {
  createBook
}
