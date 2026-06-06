export function search(term: string) {
  const matcher = new RegExp('^safe$');
  const fallback = new RegExp(`^${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`);
  return matcher.test(term) || fallback.test(term);
}
