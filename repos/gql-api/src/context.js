import ProductApi from "./api/productApi";
import CategoryApi from "./api/categoryApi";
import BrandApi from "./api/brandApi";

export default {
  apis: {
    product: new ProductApi(),
    category: new CategoryApi(),
    brand: new BrandApi(),
  }
};
