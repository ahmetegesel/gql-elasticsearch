import { ApolloServer } from 'apollo-server';
import schema from './src/schema';
import ProductApi from './src/api/productApi';

const { typeDefs, resolvers } = schema;

const context = {
  apis: {
    product: new ProductApi()
  }
};

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  introspection: true,
  playground: true
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`); // eslint-disable-line
});
