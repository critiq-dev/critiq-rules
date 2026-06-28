async function load(id: number): Promise<number> {
  return id;
}

export async function process(ids: number[]): Promise<void> {
  for (let i = 0; i < ids.length; i++) {
    await load(ids[i]);
  }
}
