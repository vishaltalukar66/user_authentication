import { signupInterface } from "../interface/signupInterface";
import { signupReturnInterface } from "../interface/signupReturnInterface";
import { signupRepo } from "../repository/signupRepo";

export const signupServices = async (data: signupInterface): Promise<signupReturnInterface> => {

    try {
        const resFromRepo = await signupRepo(data);
        return resFromRepo;

    } catch (error) {
        return {
            success: false,
            message: 'Some error occuured, Please Contact Admin'
        }
    }

}