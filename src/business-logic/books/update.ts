import { Collection, getModel } from "../../constants-definitions";
import { Book, BookSchemaMongo } from "../../types";

export const updateBook = async (
  uuid: string,
  title: string,
  author: string,
  editorial: string,
  amount: string,
  state: string
): Promise<Book | Error> => {
  const model = await getModel(Collection.BOOKS, BookSchemaMongo);
  const book = await model.findOne({ uuid: uuid });

  if (!book) {
    throw new Error("No se encontro el libro");
  }
  book.title = title ? title : book.title;
  book.author = author ? author : book.author;
  book.editorial = editorial ? editorial : book.editorial;
  book.amount = amount ? amount : book.amount;
  book.state = state ? state : book.state;

  await book.save();

  const result = (await model.findOne({ uuid: uuid })) as Book;

  return result;
};
