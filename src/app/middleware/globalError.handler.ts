import { ErrorRequestHandler } from 'express'
import config from '../../config'
import ApiError from '../errors/ApiError'

const globalErrorHandler: ErrorRequestHandler = async (
  error,
  req,
  res,
  next
) => {
  let statusCode = 500
  let message = 'Something went wrong!'
  if (error instanceof ApiError) {
    statusCode = error?.statusCode
    message = error.message
  } else if (error instanceof Error) {
    message = error?.message
  }
  res.status(statusCode).json({
    success: false,
    message: message,
    stack: config.env !== 'production' ? error?.stack : undefined
  })
}
