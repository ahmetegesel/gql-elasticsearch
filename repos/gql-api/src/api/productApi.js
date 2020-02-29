import { products } from '../schema/_mockData';

export default class ProductApi {
  findById(id) {
    return products.find(product => product.id === id);
  }

  findBy(predicate) {
    return products.filter(predicate);
  }

  findAll() {
    return products;
  }
}
