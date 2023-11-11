import { validate } from "email-validator";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'Please enter an email Id'],
            unique: true,
            lowecase: true,
            trim: true,
            validate: [(val: string) => {
                validate(val);
            }, 'Please enter a vaild email'],
            index: true // add indexing to retrive data with at most optimization
        },
        fullname: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: [true, ' Please enter password '],
            minlength: [8, 'Minimun password length must be 8 characters long']

        },
        refreshToken: {
            type: String
        }
    },
    {
        timestamps: true,
    }
)

export const User = mongoose.model('Users', userSchema);
