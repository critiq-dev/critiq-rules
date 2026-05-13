export function good(item: Record<string, number>) {
  return { ...item, extra: 1 };
}
