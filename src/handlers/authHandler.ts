import { FastifyReply, FastifyRequest } from "fastify"
import { authService } from "../services/authService";
import { loginReturnInterface } from "../interface/loginReturnInterface";

export const authHandler = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        //get data from session storage
        const data = request.session.get('userdata') as loginReturnInterface;
        if (data === undefined) {
            reply.send({
                success: false,
                message: 'User not logged In'
            }).status(400);
        }
        else {
            //call auth service to perform authentication process
            const response = await authService(data);
            //if success is true 200 statuscode else 400 status code
            const statusFromService = response.success ? 200 : 400

            reply.send(response).status(statusFromService);


        }
    } catch (error) {

        reply.status(400).send({
            success: false,
            message: 'Some error occuured, Please Contact Admin'
        })
    }


}