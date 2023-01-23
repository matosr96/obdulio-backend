import { RouteOptions } from "fastify";
import { userLogin } from "../../business-logic";
import { User } from "../../types";

export const userSigninRoute: RouteOptions = {
  method: "POST",
  url: "/user-signin",
  handler: async (request, reply) => {
    const { body } = request;
    const { username, password } = body as User;
    try {
      const user = await userLogin({ username, password });
      reply.status(200).send(user);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
