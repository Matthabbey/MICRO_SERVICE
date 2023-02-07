import CustomerService from "../services/customer-service";
import express, {Request, Response, NextFunction} from 'express'

export const Customer = (app:express.Application)=>{
    const service = new CustomerService()

    app.post('/customer/signup', async(req: Request, res: Response, next: NextFunction)=>{
        try {
            const {email, password, phone} = req.body
console.log(email, password, phone);

            const data = await service.SignUp({email, password, phone})
            
console.log(data);

            return res.status(201).json(data)
        } catch (error) {
            // next(error)
            console.log(error);
            
        }
    })
}
