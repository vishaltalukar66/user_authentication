import { signupInterface } from "../interface/signupInterface";
import { signupReturnInterface } from "../interface/signupReturnInterface";
import { User } from "../models/userModel";
import { generateHash } from "../utils/generateHash";

export const signupRepo = async (data: signupInterface): Promise<signupReturnInterface> => {
    try {
        //user exist or no
        const exists = await User.findOne({ email: data.email });
        if (exists === null) {
            //generate hash password
            const hashPassword = generateHash(data.password);
            if (hashPassword === null) {
                return {
                    success: false,
                    message: 'Unable to Generate hash, Kindly do try to Register after some time'
                }
            }
            else {
                //use User model to create new model and save
                const newUser = new User({
                    email: data.email,
                    password: hashPassword,
                    fullname: data.fullname
                })
                const userDataFromDb = await newUser.save();



                return {
                    success: true,
                    email: userDataFromDb.email,
                    dbId: userDataFromDb.id,
                    message: 'Successfully save user data'
                }

            }
        }
        else {
            return {
                success: false,
                message: 'User alredy exists'
            }
        }
    } catch (error) {
        return {
            success: false,
            message: 'Some error occuured, Please Contact Admin'
        }
    }
}