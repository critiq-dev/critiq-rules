async function load(id: number): Promise<number> {
  return id;
}

export async function process(ids: number[]): Promise<void> {
  await Promise.all(ids.map((id) => load(id)));
}
