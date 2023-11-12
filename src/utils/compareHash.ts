import bcrypt from 'bcrypt';


export const compareHash = (password: string, hashPassword: string): Boolean | null => {

    try {
        const passwordMatch: Boolean = bcrypt.compareSync(password, hashPassword)
        return passwordMatch;
    } catch (error) {
        return null;
    }


}