async function load(id: number): Promise<number> {
  return id;
}

export async function process(ids: number[]): Promise<void> {
  for (const id of ids) {
    await load(id);
  }
}
