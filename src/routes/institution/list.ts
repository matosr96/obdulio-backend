import { RouteOptions } from "fastify";
import { getInstitution } from "../../business-logic";

type Params = {
  uuid: string;
};

export const getAllInstitutionsRoute: RouteOptions = {
  method: "GET",
  url: "/institutions/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Params;
    try {
      const obj = await getInstitution(uuid);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
