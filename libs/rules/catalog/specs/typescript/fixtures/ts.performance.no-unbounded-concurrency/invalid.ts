export async function bad(items: string[]) {
  return Promise.all(items.map((item) => fetch(item)));
}
