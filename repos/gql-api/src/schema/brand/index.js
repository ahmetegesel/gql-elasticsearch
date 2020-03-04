import types from './types.graphql';

const resolvers = {
  Query: {
    brand(parent, { id }, { apis, clients }) {
      return apis.brand.findById(id, clients)
    },
    brands(parent, args, { apis, clients }) {
      return apis.brand.findAll(clients)
    }
  }
}

export {
  types,
  resolvers
}
