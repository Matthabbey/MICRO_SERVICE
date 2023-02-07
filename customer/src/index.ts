import express from 'express';
import {PORT} from './config/index'
import { databaseConnection } from './database/connections';
import { expressApp } from './express-app';

const StartServer = async () =>{
    const app = express()
     await databaseConnection()
     await expressApp(app)

     app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`)
     }).on('error', (error)=>{
        console.log(error);
        process.exit(1)
        
     })
}

StartServer()