import { IBook } from './book.interface'
import { Book } from './book.model'

const createBook = async (payload: IBook): Promise<IBook> => {
  const result = await Book.create(payload)
  return result
}
const getAllBooks = async (): Promise<IBook[]> => {
  const result = await Book.find()
  return result
}

const getSingleBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findById(id)
  return result
}

const updateBook = async (
  id: string,
  payload: Partial<IBook>
): Promise<IBook | null> => {
  const result = await Book.findByIdAndUpdate(id, payload)
  return result
}
const deleteBook = async (id: string): Promise<void> => {
  await Book.findByIdAndDelete(id)
}
export const bookService = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook
}
