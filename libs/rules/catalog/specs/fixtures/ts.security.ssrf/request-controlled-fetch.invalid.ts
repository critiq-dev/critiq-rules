declare const req: { query: { url: string } };

fetch(req.query.url);

