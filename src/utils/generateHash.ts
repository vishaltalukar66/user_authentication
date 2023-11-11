import bcrypt from 'bcrypt';

export const generateHash = (val: string): String | null => {
    try {
        const salt = bcrypt.genSaltSync(parseInt(process.env.SALTROUND as string));
        const hash = bcrypt.hashSync(val, salt); // hash Password
        return hash;
    } catch (error) {
        return null;
    }



}