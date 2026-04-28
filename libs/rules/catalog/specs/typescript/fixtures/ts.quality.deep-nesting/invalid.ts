export function render(items: number[], flag: boolean) {
  if (flag) {
    for (const item of items) {
      while (item > 0) {
        if (item > 5) {
          return item;
        }
        break;
      }
    }
  }

  return 0;
}
