/* eslint-disable class-methods-use-this */ // TODO After complete implementation, delete this

import { products } from '../schema/_mockData';

export default class ProductApi {
  product(id) {
    return products.find(product => product.id === id);
  }

  products() {
    return products;
  }
}
