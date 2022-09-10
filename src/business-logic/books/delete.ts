import { Collection, getModel } from "../../constants-definitions";
import { BookSchemaMongo } from "../../types";

export const deleteBook = async (uuid: String): Promise<Boolean | Error> => {
  const model = await getModel(Collection.BOOKS, BookSchemaMongo);
  const book = await model.findOne({ uuid: uuid });

  if (!book) {
    throw new Error("No se encontro el libro");
  }

  await book.remove();

  return true;
};
