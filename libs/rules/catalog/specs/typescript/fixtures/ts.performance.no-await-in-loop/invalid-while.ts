async function load(id: number): Promise<number> {
  return id;
}

export async function process(ids: number[]): Promise<void> {
  let i = 0;
  while (i < ids.length) {
    await load(ids[i]);
    i++;
  }
}
