import mongoose from 'mongoose';

export const dbIndex = async () => {
    try {
        // ${process.env.MONGODB_URL} conatins URL,password,Db_name of mongodb server 
        await mongoose.connect(`${process.env.MONGODB_URL}`)
            .then((res) => console.log('Connected!', res.connection.host));
    } catch (error) {
        console.log('Error in DBIndex', error);
    }
}