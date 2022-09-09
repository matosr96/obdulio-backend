import { RouteOptions } from "fastify";
import { updateUser } from "../../business-logic/users";
import { User } from "../../types";

type Params = {
  uuid: string;
};

export const updateUserByIdRoute: RouteOptions = {
  method: "PUT",
  url: "/users/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Params;
    const { body } = request;
    const { name, username } = body as User;

    try {
      const user = await updateUser(uuid, name, username);
      reply.send(user);
    } catch (err) {
      if (err instanceof Error) {
        reply.status(500).send(err.message);
      }
    }
  },
};
