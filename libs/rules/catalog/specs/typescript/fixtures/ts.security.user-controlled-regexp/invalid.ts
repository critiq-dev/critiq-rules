export function search(req: { query: { pattern: string } }) {
  const pattern = req.query.pattern;
  const matcher = new RegExp(pattern);
  const fallback = RegExp(req.query.pattern, 'i');
  return matcher.test(pattern) || fallback.test('safe');
}
