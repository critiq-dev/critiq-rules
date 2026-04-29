app.listen(3000);
app.listen(3000, '127.0.0.1');
server.listen({ port: 3001, host: 'localhost' });
Deno.serve({ hostname: '127.0.0.1', port: 8000 }, handler);
Bun.serve({ hostname: 'localhost', port: 3000, fetch() { return new Response('ok'); } });
new WebSocketServer({ host: '127.0.0.1', port: 8080 });
