app.listen(3000, '0.0.0.0');
server.listen({ port: 3001, host: '::' });
Deno.serve({ hostname: '0.0.0.0', port: 8000 }, handler);
Bun.serve({ hostname: '::', port: 3000, fetch() { return new Response('ok'); } });
new WebSocketServer({ host: '0.0.0.0', port: 8080 });
