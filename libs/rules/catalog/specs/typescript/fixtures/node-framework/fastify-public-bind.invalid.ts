import Fastify from 'fastify';

export async function start() {
  const app = Fastify();
  await app.listen({ port: 3000, host: '0.0.0.0' });
}
