import types from './types.graphql';

const resolvers = {
  Query: {
    product(parent, { id }, { apis, clients }) {
      return apis.product.findById(id, clients);
    },
    products(parent, args, { apis, clients }) {
      return apis.product.findAll(clients);
    }
  },
  Product: {
    suggestions(parent, args, { apis, clients }) {
      return apis.product.findSuggestions(parent.category.id, clients)
    }
  }
};

export { types, resolvers };
