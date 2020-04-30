import types from './types.graphql';

const resolvers = {
  Query: {
    brand(parent, { id }, { repositories }) {
      return repositories.brand.findById(id);
    },
    brands(parent, args, { repositories }) {
      return repositories.brand.findAll();
    },
  },
};

export { types, resolvers };
