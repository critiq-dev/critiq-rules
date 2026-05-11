import Fastify from 'fastify';

const API_GATEWAY = true;

export async function start() {
  const app = Fastify();
  if (API_GATEWAY) {
    await app.listen({ port: 3000, host: '0.0.0.0' });
  }
}
