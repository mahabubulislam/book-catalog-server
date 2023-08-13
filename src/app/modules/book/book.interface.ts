export type IBook = {
  title: string;
  img: string;
  author: string;
  genre: string;
  publicationDate: Date;
  reviews: Array<string>;
};
export type IBookFilters = {
  searchTerm?: string;
  genre?: string;
  publicationDate?: string;
  author?: string;
};
