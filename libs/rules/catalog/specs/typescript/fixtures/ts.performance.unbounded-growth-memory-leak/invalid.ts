const cache = new Set<string>();

export function remember(value: string): void {
  cache.add(value);
}
