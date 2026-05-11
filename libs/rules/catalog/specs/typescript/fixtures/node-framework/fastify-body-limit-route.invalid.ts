import Fastify from 'fastify';

export function createServer() {
  const app = Fastify({ bodyLimit: 1024 * 1024 });
  app.post('/upload', { bodyLimit: 104857600 }, async () => ({ ok: true }));
  return app;
}
