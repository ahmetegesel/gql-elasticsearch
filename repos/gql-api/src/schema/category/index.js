import { categories } from '../_mockData';

import types from './types.graphql';

const resolvers = {
  Query: {
    category(parent, { id }, { apis }) {
      return apis.category.findById(id);
    },
    categories(parent, args, { apis }) {
      return apis.category.findAll();
    }
  }
};

export {
  types,
  resolvers
}
