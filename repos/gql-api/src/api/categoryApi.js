import { categories } from "../schema/_mockData";

export default class CategoryApi {
  findById(id) {
    return categories.find(category => category.id === id);
  }

  findAll() {
    return categories;
  }
}
