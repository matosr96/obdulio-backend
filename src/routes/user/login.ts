import { RouteOptions } from "fastify";
import { userLogin } from "../../business-logic/users";
import { User } from "../../types";

export const userLoginRoute: RouteOptions = {
    method: 'POST',
    url: '/login',
    handler: async (request, reply) => {
        const {body} = request;
        const {username, password,} = body as User;
        try{
            const user = await userLogin({password, username});
            reply.send(user);
        }catch(err){
            if(err instanceof Error){
                reply.status(500).send(err.message);
            }
        }
    }
}