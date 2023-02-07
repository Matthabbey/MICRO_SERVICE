import {hash, genSalt} from 'bcrypt'
import { sign, verify } from 'jsonwebtoken';
import { APP_SECRET } from '../config/index';

export const GenerateSalt = async ()=>{
    return await genSalt()
}

export const GeneratePassword = async (password: string, salt: string) =>{
    return await hash(password, salt)
}

export const GenerateSignature = async (payload: string | {}) =>{
    return sign(payload, APP_SECRET, {expiresIn: '1d'})
}

export const FormData = async(data: unknown)=>{
    if(data){
        return data
    }
    throw new Error ('Data not found now')
}

export const ValidateSignature = async (req: Request | any) =>{
    try {
        const signature = req.get('Authorization')
        console.log(signature);
        const payload = verify(signature.split(" ")[1], APP_SECRET)

        req.user = payload

        return true
        
    } catch (error) {
        console.log(error)
        return false
    }
}