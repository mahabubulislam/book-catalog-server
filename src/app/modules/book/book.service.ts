import { SortOrder } from 'mongoose';
import { bookSearchableFields } from './book.constant';
import { IBook, IBookFilters } from './book.interface';
import { Book } from './book.model';
const createBook = async (payload: IBook): Promise<IBook> => {
  const result = await Book.create(payload);
  return result;
};
const getAllBooks = async (
  filters: IBookFilters,
  sortBy: string | undefined
): Promise<IBook[]> => {
  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: bookSearchableFields.map((field) => ({
        [field]: { $regex: searchTerm, $options: 'i' }
      }))
    });
  }
  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value
      }))
    });
  }
  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy) {
    sortConditions[sortBy] = 'ascending';
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};
  const result = await Book.find(whereConditions).sort(sortConditions);
  return result;
};

const getSingleBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findById(id);
  return result;
};

const updateBook = async (
  id: string,
  payload: Partial<IBook>
): Promise<IBook | null> => {
  const result = await Book.findByIdAndUpdate(id, payload);
  return result;
};
const deleteBook = async (id: string): Promise<void> => {
  await Book.findByIdAndDelete(id);
};
export const bookService = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook
};
