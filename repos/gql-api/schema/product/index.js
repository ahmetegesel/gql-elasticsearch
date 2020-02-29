import types from './types.graphql';
import { products } from "../_mockData";

const resolvers = {
  Query: {
    product(parent, { id }, { apis }) {
      return apis.product.product(id);
    },
    products() {
      return products;
    }
  }
}

export {
  types,
  resolvers
}
