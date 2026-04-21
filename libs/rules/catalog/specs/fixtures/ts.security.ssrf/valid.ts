declare const req: { query: { url: string } };
declare function normalizeAllowedUrl(value: string): string;

fetch(normalizeAllowedUrl(req.query.url));
fetch('https://example.com/api');

