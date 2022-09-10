import { Collection, getModel } from "../../constants-definitions";
import { Book, BookSchemaMongo } from "../../types";

export const getBooksById = async (user: string): Promise<Book[]> => {
  const model = await getModel(Collection.BOOKS, BookSchemaMongo);
  const book = (await model.find({ user: user })) as Book[];
  return book;
};
