import { loginReturnInterface } from "../interface/loginReturnInterface";
import jwt from 'jsonwebtoken';


export const decodeJWT = (token: string): { success: boolean } => {

    try {
        //decode the jwt token and return
        //it even checked it token is exipred or no
        const tokenData = jwt.verify(token, `${process.env.JWT}`);


        return {
            success: true,
        }


    } catch (error) {
        return { success: false };
    }



}