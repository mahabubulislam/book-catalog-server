import { Schema, model } from 'mongoose'
import { IBook } from './book.interface'

const bookSchema = new Schema<IBook>({
  title: {
    type: String,
    required: true
  },
  img: {
    type: String
  },
  author: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  publicationDate: {
    type: Date,
    required: true
  },
  reviews: {
    type: String
  }
})

export const Book = model<IBook>('Book', bookSchema)
