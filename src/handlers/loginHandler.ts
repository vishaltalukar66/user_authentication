import { FastifyReply, FastifyRequest } from "fastify";
import { loginInterface } from "../interface/loginInterface";
import { validate } from "email-validator";
import { loginService } from "../services/loginService";

export const loginHandler = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        //extract data from request body
        const data = request.body as loginInterface;
        //if valid email then proceed 
        if (validate(data.email)) {
            const response = await loginService(data);
            //if success is true 200 statuscode else 400 status code
            const statusFromService = response.success ? 200 : 400
            request.session.set('userdata', response)

            reply.send(response).status(statusFromService);
        }
        else {
            reply.status(400).send({
                success: false,
                message: 'Please enter a valid Email-Id'
            })
        }
    } catch (error) {
        reply.status(400).send({
            success: false,
            message: 'Some error occuured, Please Contact Admin'
        })
    }


}