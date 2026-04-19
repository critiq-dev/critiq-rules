declare function decode(token: string): unknown;
declare function verifyToken(token: string): void;

type Request = {
  headers: Record<string, string | undefined>;
};

export function parseIdentity(req: Request) {
  const token = req.headers.authorization;

  verifyToken(token ?? '');
  return decode(token ?? '');
}
