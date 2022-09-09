import { RouteOptions } from "fastify";
import { getUserById } from "../../business-logic/users";
import { User } from "../../types";

export const getUserByIdRoute: RouteOptions = {
    method: 'GET',
    url: '/users/:uuid',
    handler: async (request, reply) => {
        const {params} = request;
        const {uuid} = params as User;
        try{
            const user = await getUserById(uuid);
            reply.send(user);
        }catch(err){
            if(err instanceof Error){
                reply.status(500).send(err.message);
            }
        }
    }
}