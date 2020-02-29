import { products } from '../schema/_mockData';

export default class ProductApi {
  product(id) {
    return products.find(product => product.id === id);
  }

  products() {
    return products;
  }
}
