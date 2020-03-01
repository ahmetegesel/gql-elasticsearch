import ProductApi from "./api/product";
import CategoryApi from "./api/category";
import BrandApi from "./api/brand";

import createElasticClient from "./lib/createElasticClient";

const clients = {
  elastic: createElasticClient({
    node: process.env.ELASTIC_HOST,
    auth: {
      username: process.env.ELASTIC_USERNAME,
      password: process.env.ELASTIC_PASSWORD
    }
  })
};

const apis = {
  product: new ProductApi(),
  category: new CategoryApi(),
  brand: new BrandApi(),
}


const context = {
  clients,
  apis
};

Object.freeze(context);

export default context;
