import { RouteOptions } from "fastify";
import { getBooksById } from "../../business-logic";

type Params = {
  user: string;
};

export const getBooksByUserIdRoute: RouteOptions = {
  method: "GET",
  url: "/books/:user",
  handler: async (request, reply) => {
    const { params } = request;
   
    const { user } = params as Params;
    console.log(user)
    try {
      const book = await getBooksById(user);
      reply.send(book);
    } catch (err) {
      if (err instanceof Error) {
        reply.send(500).send(err.message);
      }
    }
  },
};
