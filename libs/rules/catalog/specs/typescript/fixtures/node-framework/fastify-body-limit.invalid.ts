import Fastify from 'fastify';

export function createServer() {
  return Fastify({ bodyLimit: 104857600 });
}
