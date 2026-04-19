declare function decode(token: string): unknown;

type Request = {
  headers: Record<string, string | undefined>;
};

export function parseIdentity(req: Request) {
  const token = req.headers.authorization;

  return decode(token ?? '');
}
