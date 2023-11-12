import { Date } from "mongoose";

export interface userDbInterface {

    _id: string;

    email: string;

    fullname: string;

    password: string;
    createdAt: Date;

    updatedAt: Date;
    token?: string;
}