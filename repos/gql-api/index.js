import { ApolloServer } from 'apollo-server';
import schema from './src/schema';
import { initializeContext } from './src/context';

const { typeDefs, resolvers } = schema;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: initializeContext,
  introspection: true,
  playground: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`); // eslint-disable-line
});
