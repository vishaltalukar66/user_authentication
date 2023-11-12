import { loginInterface } from "../interface/loginInterface";
import { loginReturnInterface } from "../interface/loginReturnInterface";
import { User } from "../models/userModel";
import { compareHash } from "../utils/compareHash";
import { generateJWT } from "../utils/generateJWT";

export const loginRepo = async (data: loginInterface): Promise<loginReturnInterface> => {
    try {
        //user exist or no
        const exists = await User.findOne({ email: data.email });
        if (exists === null) {
            return {
                success: false,
                message: 'User not registed, Kinldy singup to Login'
            }
        }
        else {
            //compare password
            if (compareHash(data.password, exists.password)) {
                const resturnData = {
                    success: true,
                    email: data.email,
                    dbId: exists.id,
                    message: 'Successfully Logged In',
                } as loginReturnInterface;
                const jwtCookie = await generateJWT(resturnData);
                if (jwtCookie !== null) {
                    // update token in db
                    const updateDbWithJWT = await User.updateOne({ email: data.email }, {
                        $set: {
                            token: jwtCookie
                        }
                    });

                    // console.log(updateDbWithJWT);
                    resturnData.jwtCookie = jwtCookie as string;
                    return resturnData;
                }
                else {
                    throw new Error("unable to generate jwt token")
                }



            }
            else if ((compareHash(data.password, exists.password)) === null) {
                throw new Error('Error in compare Password')
            }
            else {
                return {
                    success: false,
                    message: 'Invaild password',


                }
            }
        }
    } catch (error) {
        return {
            success: false,
            message: 'Some error occuured, Please Contact Admin'
        }
    }
}