import { ApolloServer } from '@apollo/server';
import depthLimit from 'graphql-depth-limit';

declare const typeDefs: unknown;
declare const resolvers: unknown;

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  validationRules: [depthLimit(8)],
});
