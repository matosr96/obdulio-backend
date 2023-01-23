import { RouteOptions } from "fastify";
import { userRegister } from "../../business-logic";
import { User } from "../../types";

export const userSignupRoute: RouteOptions = {
  method: "POST",
  url: "/user-signup",
  handler: async (request, reply) => {
    const { body } = request;
    const data = body as User;
    try {
      const user = await userRegister(data);
      reply.status(200).send(user);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
