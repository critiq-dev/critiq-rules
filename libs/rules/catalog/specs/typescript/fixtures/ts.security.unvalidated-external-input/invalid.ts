type Request = {
  query: Record<string, string | undefined>;
};

export function compilePattern(req: Request) {
  const pattern = req.query.pattern;

  return new RegExp(pattern);
}
