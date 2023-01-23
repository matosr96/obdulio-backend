import { FastifyInstance, RouteOptions } from "fastify";
import { bookRoutes } from "./book";
import { institutionRoutes } from "./institution";

import { userRoutes } from "./users";

const routes: RouteOptions[] = [
  ...userRoutes,
  ...institutionRoutes,
  ...bookRoutes,
];
export const registerRoutes = (fastify: FastifyInstance) => {
  fastify.log.warn("Registering routes", routes);

  routes.map((route) => {
    fastify.route(route);
  });
};
