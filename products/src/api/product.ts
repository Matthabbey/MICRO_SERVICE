import ProductService from "../services/product-service";
import express, {Request, Response, NextFunction} from 'express'

export const Product = (app:express.Application)=>{
    const service = new ProductService()

    app.post('/product/create', async(req: Request, res: Response, next: NextFunction)=>{
        try {
            const {
                name,
                desc,
                banner,
                type,
                unit,
                price,
                available,
                suplier } = req.body

            const data = await service.ProductCreate({
                name,
                desc,
                banner,
                type,
                unit,
                price,
                available,
                suplier })
            
console.log(data);

            return res.status(201).json(data)
        } catch (error) {
            // next(error)
            console.log(error);
            
        }
    })
}
