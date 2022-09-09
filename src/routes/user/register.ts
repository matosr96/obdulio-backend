import { RouteOptions } from "fastify";
import { userRegister } from "../../business-logic/users";
import { User } from "../../types";

export const userRegisterRoute: RouteOptions = {
  method: "POST",
  url: "/register",
  handler: async (request, reply) => {
    const { body } = request;
    const { name, username, password } = body as User;
    try {
      const user = await userRegister({ name, password, username });
      reply.send(user);
    } catch (err) {
      if (err instanceof Error) {
        reply.send(err).send(err.message);
      }
    }
  },
};
