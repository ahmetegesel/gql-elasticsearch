import {} from 'apollo-server';
import merge from 'lodash.merge';

import { types as Product, resolvers as productResolvers } from './product';
import { types as Category, resolvers as categoryResolvers } from './category';
import Query from './types.graphql';

const resolvers = merge(productResolvers, categoryResolvers);

export default {
  typeDefs: [Query, Product, Category],
  resolvers
};
