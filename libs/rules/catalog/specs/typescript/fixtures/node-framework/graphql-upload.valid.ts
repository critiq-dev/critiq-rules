import { ApolloServer } from '@apollo/server';
import { graphqlUploadExpress } from 'graphql-upload/graphqlUploadExpress.mjs';

declare const typeDefs: unknown;
declare const resolvers: unknown;
declare const app: { use: (fn: unknown) => void };

app.use(graphqlUploadExpress());

export const server = new ApolloServer({
  typeDefs,
  resolvers,
});
