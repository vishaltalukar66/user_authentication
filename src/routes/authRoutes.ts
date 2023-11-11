import { FastifyInstance } from "fastify";
import { loginHandler } from "../handlers/loginHandler";
import { signupSchema } from "../schema/signupSchema";
import { signupHandler } from "../handlers/signupHandler";


export const authRoutes = async (server: FastifyInstance) => {

    const login = {
        handler: loginHandler
    }

    const signup = {
        schema: signupSchema,
        handler: signupHandler
    }

    server.post('/login', login);

    server.post('/signup', signup);

}