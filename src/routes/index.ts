import { FastifyInstance, RouteOptions } from "fastify";
import {
  userRegisterRoute,
  userLoginRoute,
  getUserByIdRoute,
  updateUserByIdRoute,
} from "./user";

const routes: RouteOptions[] = [
  userRegisterRoute,
  userLoginRoute,
  getUserByIdRoute,
  updateUserByIdRoute,
];

export const registerRoutes = (fastify: FastifyInstance) => {
  fastify.log.warn("Registering routes", routes);

  routes.map((route) => {
    fastify.route(route);
  });
};
