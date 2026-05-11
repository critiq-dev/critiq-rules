import { ApolloServer } from '@apollo/server';

declare const typeDefs: unknown;
declare const resolvers: unknown;

export const server = new ApolloServer({
  typeDefs,
  resolvers,
});
