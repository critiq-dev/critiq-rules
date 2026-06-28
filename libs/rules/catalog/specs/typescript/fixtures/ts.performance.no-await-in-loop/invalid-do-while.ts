async function load(id: number): Promise<number> {
  return id;
}

export async function process(ids: number[]): Promise<void> {
  let i = 0;
  do {
    await load(ids[i]);
    i++;
  } while (i < ids.length);
}
