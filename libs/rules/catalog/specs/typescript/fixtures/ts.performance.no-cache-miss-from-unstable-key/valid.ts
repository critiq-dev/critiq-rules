const cache = new Map<string, unknown>();
export function good(id: string) {
  cache.set(`k:${id}`, true);
}
