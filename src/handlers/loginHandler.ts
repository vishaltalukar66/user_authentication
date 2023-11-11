import { FastifyReply, FastifyRequest } from "fastify";

export const loginHandler = async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ success: true })
}