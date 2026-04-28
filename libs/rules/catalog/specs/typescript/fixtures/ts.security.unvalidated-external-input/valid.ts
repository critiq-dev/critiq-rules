declare function validatePattern(value: string | undefined): void;

type Request = {
  query: Record<string, string | undefined>;
};

export function compilePattern(req: Request) {
  const pattern = req.query.pattern;

  validatePattern(pattern);
  return new RegExp(pattern ?? '');
}
