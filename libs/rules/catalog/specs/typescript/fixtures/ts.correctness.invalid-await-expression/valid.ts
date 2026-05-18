async function load(): Promise<number> {
  return 1;
}

export async function valid(): Promise<number> {
  return await load();
}
