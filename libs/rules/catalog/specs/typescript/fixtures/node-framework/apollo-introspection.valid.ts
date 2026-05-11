import { ApolloServer } from '@apollo/server';
import depthLimit from 'graphql-depth-limit';

declare const typeDefs: unknown;
declare const resolvers: unknown;

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: process.env.NODE_ENV !== 'production',
  validationRules: [depthLimit(8)],
});
