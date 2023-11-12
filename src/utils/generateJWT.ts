import { loginReturnInterface } from "../interface/loginReturnInterface"
import jwt from 'jsonwebtoken';

export const generateJWT = async (data: loginReturnInterface): Promise<string | null> => {

    const expiration = Math.floor(Date.now() / 1000) + 2 * 60; // 2 minutes in seconds
    const payload = data;
    try {
        return (jwt.sign({
            exp: expiration,
            data: payload
        },
            `${process.env.JWT}`
        ))
    }
    catch (error) {
        return null;
    }
}