import { v4 as uuidv4 } from "uuid";
import { Collection, getModel } from "../../constants-definitions";
import { Book, BookSchemaMongo } from "../../types";

export const createBook = async (data: Book): Promise<Book | Error> => {
  const model = await getModel(Collection.BOOKS, BookSchemaMongo);
  const uuid = uuidv4();

  const book = new model({ ...data, uuid });

  if (!book) {
    throw new Error("No se pudo crear el libro");
  }

  await book.save();

  const result = (await model.findOne({ uuid: uuid })) as Book;

  return result;
};
