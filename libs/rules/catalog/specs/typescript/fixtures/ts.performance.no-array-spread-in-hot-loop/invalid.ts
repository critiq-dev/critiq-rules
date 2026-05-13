export function bad(items: number[]) {
  for (const item of items) {
    const next = [...items, item];
    void next;
  }
}
