import { runServer } from './server';
import { dbIndex } from './db/dbIndex';
require('dotenv').config({ path: './.env' }) //Do not forget


const index = async () => {
    try {
        //Invoke Db connect then start server
        await dbIndex().then(async () => {
            await runServer();
        })



    } catch (error) {
        console.log("Unable to start Server");
    }
}



index();



