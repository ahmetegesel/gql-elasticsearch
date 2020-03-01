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
      return apis.product.findSuggestions(parent.category_id, clients)
    },
    brand(parent) {
      const brand = {};

      if(parent.brand_id)
        brand.id = parent.brand_id;

      if(parent.brand_name)
        brand.name = parent.brand_name;

      return brand || undefined;
    },
    category(parent) {
      const category = {};

      if(parent.category_id)
        category.id = parent.category_id;

      if(parent.category_name)
        category.name = parent.category_name;

      return category || undefined;
    }
  }
};

export { types, resolvers };
