import { loginInterface } from "../interface/loginInterface";
import { loginReturnInterface } from "../interface/loginReturnInterface";
import { loginRepo } from "../repository/loginRepo";

export const loginService = async (data: loginInterface): Promise<loginReturnInterface> => {

    try {
        //to check the user details with db

        const resFromRepo = await loginRepo(data);
        return resFromRepo;

    } catch (error) {
        return {
            success: false,
            message: 'Some error occuured, Please Contact Admin'
        }
    }
}