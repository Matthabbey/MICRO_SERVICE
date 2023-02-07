import { CustomerModel, ICustomer } from "../models";

export class CustomerRepository{

    async CreateCustomer({
        email,
        password,
        phone,
        salt
    }: ICustomer){
        
        try {
            const customer = new CustomerModel({
                email,
                password,
                phone,
                salt
            })
            const customerResult = customer.save()
            return customerResult
        } catch (error) {
            console.log(error);
            
        }
    }

    async FindExistingCustomer({email}: {email: string}){
        const existCustomer = await CustomerModel.findOne({email})
        return existCustomer
    }
}