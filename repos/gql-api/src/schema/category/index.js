import types from './types.graphql';

const resolvers = {
  Query: {
    category(parent, { id }, { repositories }) {
      return repositories.category.findById(id);
    },
    categories(parent, args, { repositories }) {
      return repositories.category.findAll();
    },
  },
};

export { types, resolvers };
