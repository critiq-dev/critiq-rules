import { ApolloServer } from '@apollo/server';
import depthLimit from 'graphql-depth-limit';

declare const typeDefs: unknown;
declare const resolvers: unknown;

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: false,
  validationRules: [depthLimit(8)],
});
