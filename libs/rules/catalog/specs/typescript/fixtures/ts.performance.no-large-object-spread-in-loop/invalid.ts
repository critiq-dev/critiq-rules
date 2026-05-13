export function bad(items: Array<Record<string, number>>) {
  for (const item of items) {
    const copy = { ...item, extra: 1 };
    void copy;
  }
}
