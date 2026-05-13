export async function good(items: string[]) {
  for (const item of items) {
    await fetch(item);
  }
}
