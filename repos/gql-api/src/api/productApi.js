import { products } from '../schema/_mockData';

export default class ProductApi {
  findById(id) {
    return products.find(product => product.id === id);
  }

  findAll() {
    return products;
  }
}
