import { FastifyReply, FastifyRequest } from "fastify";

export const logoutHandler = async (request: FastifyRequest, reply: FastifyReply) => {
    request.session.delete();
    reply.send('logout');
}