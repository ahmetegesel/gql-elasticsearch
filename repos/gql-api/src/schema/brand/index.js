import types from './types.graphql';

const resolvers = {
  Query: {
    brand(parent, { id }, context) {
      return context.apis.brand.findById(id)
    },
    brands(parent, args, context) {
      return context.apis.brand.findAll()
    }
  }
}

export {
  types,
  resolvers
}
