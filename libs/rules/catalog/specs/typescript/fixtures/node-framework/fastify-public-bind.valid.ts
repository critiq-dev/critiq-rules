import Fastify from 'fastify';

export async function start() {
  const app = Fastify({ trustProxy: true });
  await app.listen({ port: 3000, host: '0.0.0.0' });
}
