import Fastify from 'fastify';

export function createServer() {
  return Fastify({ bodyLimit: 1048576 });
}
