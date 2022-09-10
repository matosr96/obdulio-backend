import { RouteOptions } from "fastify";
import { updateBook } from "../../business-logic";
import { Book } from "../../types";

type Params = {
  uuid: string;
};

export const updateBookByIdRoute: RouteOptions = {
  method: "PUT",
  url: "/books/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Params;
    const { body } = request;
    const { title, author, editorial, amount, state } = body as Book;

    try {
      const book = await updateBook(
        uuid,
        title,
        author,
        editorial,
        amount,
        state
      );
      reply.send(book);
    } catch (err) {
      if (err instanceof Error) {
        reply.send(500).send(err.message);
      }
    }
  },
};
