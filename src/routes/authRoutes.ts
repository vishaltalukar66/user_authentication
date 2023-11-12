import { FastifyInstance } from "fastify";
import { loginHandler } from "../handlers/loginHandler";
import { signupSchema } from "../schema/signupSchema";
import { signupHandler } from "../handlers/signupHandler";
import { loginSchema } from "../schema/loginSchema";
import { authHandler } from "../handlers/authHandler";
import { logoutHandler } from "../handlers/logoutHandler";
import { authSchema } from "../schema/authSchema";


export const authRoutes = async (server: FastifyInstance) => {

    const login = {
        schema: loginSchema,
        handler: loginHandler
    }

    const signup = {
        schema: signupSchema,
        handler: signupHandler
    }

    const auth = {
        schema: authSchema,
        handler: authHandler
    }
    const logout = {
        handler: logoutHandler
    }

    server.post('/signup', signup);
    server.post('/login', login);


    server.post('/auth', auth);
    server.post('/logout', logout);

}