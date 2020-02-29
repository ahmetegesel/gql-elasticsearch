import { brands } from "../schema/_mockData";

export default class BrandApi {
  findById(id) {
    return brands.find(brand => brand.id === id);
  }

  findAll() {
    return brands;
  }
}
