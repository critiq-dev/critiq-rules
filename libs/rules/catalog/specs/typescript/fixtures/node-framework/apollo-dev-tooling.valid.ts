import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/disabled';

declare const typeDefs: unknown;
declare const resolvers: unknown;

const landing =
  process.env.NODE_ENV === 'production'
    ? []
    : [ApolloServerPluginLandingPageLocalDefault()];

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: landing,
});
