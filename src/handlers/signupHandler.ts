import { FastifyReply, FastifyRequest } from "fastify";
import { signupInterface } from "../interface/signupInterface";
import { signupServices } from "../services/signupServices";
import { validate } from "email-validator";

export const signupHandler = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        //extract data from request body
        const data = request.body as signupInterface;
        //if valid email then proceed 
        if (validate(data.email)) {
            //comfirm password
            if (data.password === data.cpassword) {
                const response = await signupServices(data)
                //if success is true 200 statuscode else 400 status code

                const statusFromService = response.success ? 200 : 400
                reply.send(response).status(statusFromService);
            }
            else {
                reply.status(400).send({
                    success: false,
                    message: 'Password and confirm password do not match'
                })
            }
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