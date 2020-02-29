import { products } from "../schema/_mockData";
import { productsLoader, suggestionsLoader } from '../dataLoaders/product';

export default class ProductApi {
  findById(id) {
    return productsLoader.load(id);
  }

  findSuggestions(categoryId) {
    return suggestionsLoader.load(categoryId);
  }

  findAll() {
    return products;
  }
}
