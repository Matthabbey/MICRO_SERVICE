import { IProducts, ProductModel } from "../models";

export class ProductRepository{

    async CreateProduct({
        name,
        desc,
        banner,
        type,
        unit,
        price,
        available,
        suplier
    }: IProducts){
        
        try {
            const customer = new ProductModel({
                name,
                desc,
                banner,
                type,
                unit,
                price,
                available,
                suplier
            })
            const customerResult = customer.save()
            return customerResult
        } catch (error) {
            console.log(error);
            
        }
    }

    // async FindExistingCustomer({email}: {email: string}){
    //     const existCustomer = await ProductModel.findOne({email})
    //     return existCustomer
    // }
}