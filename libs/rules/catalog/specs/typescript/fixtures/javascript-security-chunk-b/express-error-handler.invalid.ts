import type { NextFunction, Request, Response } from 'express';

export function register(app: {
  use: (fn: unknown) => void;
}): void {
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.send(err);
  });
}
