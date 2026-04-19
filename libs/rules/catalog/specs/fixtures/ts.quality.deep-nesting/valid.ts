export function render(items: number[], flag: boolean) {
  if (!flag) {
    return 0;
  }

  for (const item of items) {
    if (item > 5) {
      return item;
    }
  }

  return 0;
}
