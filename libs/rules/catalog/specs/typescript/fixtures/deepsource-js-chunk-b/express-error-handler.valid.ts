import type { NextFunction, Request, Response } from 'express';

export function register(app: {
  use: (fn: unknown) => void;
}): void {
  app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    res.status(500).send('internal error');
  });
}
