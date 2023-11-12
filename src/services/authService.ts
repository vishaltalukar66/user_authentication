import { loginReturnInterface } from "../interface/loginReturnInterface";
import { authRepo } from "../repository/authRepo";
import { decodeJWT } from "../utils/decodeJWT";

export const authService = async (data: loginReturnInterface): Promise<{ success: boolean }> => {

    try {

        //verify the jwt token
        const tokenAuth = decodeJWT(data.jwtCookie as string);
        if (tokenAuth.success) {
            //to check the user token with db token
            const resFromRepo = await authRepo(data);
            return resFromRepo;
        }
        else {
            return ({
                success: false
            })
        }

    } catch (error) {
        return ({ success: false })
    }
}