import { products } from '../_mockData';

import types from './types.graphql';

const resolvers = {
  Query: {
    product(parent, { id }, { apis }) {
      return apis.product.findById(id);
    },
    products(parent, args, { apis }, info) {
      return apis.product.findAll();
    }
  },
  Product: {
    suggestions(parent, args, { apis }) {
      return apis.product.findSuggestions(parent.category.id)
    }
  }
};

export { types, resolvers };
