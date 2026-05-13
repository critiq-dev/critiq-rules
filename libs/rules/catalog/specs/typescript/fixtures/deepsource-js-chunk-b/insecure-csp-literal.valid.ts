import type { Request, Response } from 'express';

export function setCsp(_req: Request, res: Response): void {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'nonce-abc123'",
  );
}
