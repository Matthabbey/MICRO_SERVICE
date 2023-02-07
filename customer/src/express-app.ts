import express  from "express";
import cors from 'cors'
import logger from 'morgan'
import { Customer } from './api'

export const expressApp = async (app: express.Application)=>{

    app.use(express.json())
    app.use(cors())
    app.use(logger('dev'))

    //api
    Customer(app)

}