import { RouteOptions } from "fastify";
import { createBook } from "../../business-logic";
import { Book } from "../../types";

export const createBookRoute: RouteOptions = {
    method: "POST",
    url: "/books",
    handler: async (request, reply) => {
      const { body } = request;
      const data = body as Book;
      try {
        const contact = await createBook(data);
        reply.send(contact);
      } catch (err) {
        if (err instanceof Error) {
          reply.send(500).send(err.message);
        }
      }
    },
  };