import { Response } from 'express'
type IResponse<T> = {
  success: true
  data: T | null
  message: string
  statusCode: number
}
const sendResponse = <T>(res: Response, data: IResponse<T>): void => {
  const responseData: IResponse<T> = {
    success: data.success,
    message: data.message,
    statusCode: data.statusCode,
    data: data.data
  }
  res.status(data.statusCode).json(responseData)
}
export default sendResponse
