const cache = new Map<string, unknown>();
export function bad() {
  cache.set(`k:${Date.now()}:${Math.random()}`, true);
}
