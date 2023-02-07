
import { ProductRepository } from "../database/repository/customer-reposatory";
import {
  FormData,
 
} from "../utils";
import { IProductDTO } from "./product-service.dto";

//Business Logic
class ProductService {
  repository;

  constructor() {
    this.repository = new ProductRepository();
  }
  async ProductCreate(productInput: IProductDTO) {
    const {  name,
      desc,
      banner,
      type,
      unit,
      price,
      available,
      suplier } = productInput;
    try {
      const products = await this.repository.CreateProduct({
        name,
        desc,
        banner,
        type,
        unit,
        price,
        available,
        suplier 
      });

      return FormData(products);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default ProductService;
