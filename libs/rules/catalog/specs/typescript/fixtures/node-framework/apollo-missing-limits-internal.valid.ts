import { ApolloServer } from '@apollo/server';

declare const app: { listen(options: { host: string; port: number }): Promise<void> };
declare const typeDefs: unknown;
declare const resolvers: unknown;

export const server = new ApolloServer({
  typeDefs,
  resolvers,
});

await app.listen({ host: '127.0.0.1', port: 4000 });
