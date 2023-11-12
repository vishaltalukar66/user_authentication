import { loginReturnInterface } from "../interface/loginReturnInterface"
import { userDbInterface } from "../interface/userDbInterface";
import { User } from "../models/userModel"

export const authRepo = async (data: loginReturnInterface): Promise<{ success: boolean }> => {

    try {
        //user exist or no
        const exists = await User.findOne({ email: data.email });
        if (exists === null) {
            return {
                success: false,

            }
        }
        else {
            // user exists 
            //fetch token from server and compare with the token present in the session
            if ((exists.token) as string === data.jwtCookie) {
                return ({ success: true });
            }
            else {
                return ({ success: false })
            }
        }


    } catch (error) {
        return { success: false }
    }
}