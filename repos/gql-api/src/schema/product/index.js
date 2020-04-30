import types from './types.graphql';

const resolvers = {
  Query: {
    product(parent, { id }, { repositories }) {
      return repositories.product.findById(id);
    },
    products(parent, args, { repositories }) {
      return repositories.product.findAll();
    },
  },
  Product: {
    suggestions(parent, args, { repositories }) {
      return repositories.product.findSuggestions(parent.category.id);
    },
  },
};

export { types, resolvers };
