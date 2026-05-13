import type { Request } from 'express';

declare function parseString(
  xml: string,
  callback: (err: Error | null, result: unknown) => void,
): void;

export function parseXml(req: Request): void {
  parseString(req.body.payload, () => {});
}
