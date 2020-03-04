import types from './types.graphql';

const resolvers = {
  Query: {
    category(parent, { id }, { apis, clients }) {
      return apis.category.findById(id, clients);
    },
    categories(parent, args, { apis, clients }) {
      return apis.category.findAll(clients);
    }
  }
};

export {
  types,
  resolvers
}
