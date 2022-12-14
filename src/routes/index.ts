import { FastifyInstance, RouteOptions } from "fastify";
import {
  createBookRoute,
  deleteBookByIdRoute,
  getBooksByUserIdRoute,
  updateBookByIdRoute,
} from "./books";
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

  createBookRoute,
  updateBookByIdRoute,
  deleteBookByIdRoute,
  getBooksByUserIdRoute,
];

export const registerRoutes = (fastify: FastifyInstance) => {
  fastify.log.warn("Registering routes", routes);

  routes.map((route) => {
    fastify.route(route);
  });
};
