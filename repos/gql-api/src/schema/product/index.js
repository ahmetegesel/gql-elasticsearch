import { products } from '../_mockData';

import types from './types.graphql';

const resolvers = {
  Query: {
    product(parent, { id }, { apis }) {
      return apis.product.findById(id);
    },
    products(parent, args, { apis }) {
      return apis.product.findAll();
    }
  }
};

export { types, resolvers };
