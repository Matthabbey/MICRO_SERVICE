import mongoose from 'mongoose'
import { DATABASE_URL} from '../config/index'


export const databaseConnection = async ()=>{
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(DATABASE_URL!)
        console.log(`Connection to MONGODB is successful`)
    } catch (error) {
        console.log(error);
        console.log('Error ====');
        process.exit(1)
    }
}