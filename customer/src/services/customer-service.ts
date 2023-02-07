import { genSalt } from "bcrypt";
import { CustomerRepository } from "../database/repository/customer-reposatory";
import {
  FormData,
  GeneratePassword,
  GenerateSalt,
  GenerateSignature,
} from "../utils";
import { IUser } from "./customer-service.dto";

//Business Logic
class CustomerService {
  repository;

  constructor() {
    this.repository = new CustomerRepository();
  }
  async SignUp(userInput: IUser) {
    const { email, password, phone } = userInput;
    try {
      const existCustomer = await this.repository.FindExistingCustomer({
        email,
      });

      if (existCustomer) {
        throw new Error("User already exist");
      }

      //Generate Salt
      let salt = await GenerateSalt();
      let userPassword = await GeneratePassword(password, salt);

      const customer = await this.repository.CreateCustomer({
        email,
        phone,
        password: userPassword,
        salt,
      });
      const token = await GenerateSignature({ email });
      return FormData({ customer, token });
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default CustomerService;
