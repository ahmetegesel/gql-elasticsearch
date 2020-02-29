import types from './types.graphql';
import { categories } from "../_mockData";

const resolvers = {
  Query: {
    category(parent, { id }) {
      return categories.find(category => category.id === id);
    },
    categories() {
      return categories;
    }
  }
}

export {
  types,
  resolvers
}
