declare const req: { query: { url: string } };
declare const axios: { request(value: unknown): void };
declare function validateAllowedUrl(value: string): string;

axios.request({ url: validateAllowedUrl(req.query.url) });
