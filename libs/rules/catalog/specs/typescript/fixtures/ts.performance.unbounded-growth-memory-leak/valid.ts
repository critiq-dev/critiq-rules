export function remember(value: string): Set<string> {
  const localCache = new Set<string>();
  localCache.add(value);
  return localCache;
}
