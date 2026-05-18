async function load(): Promise<number> {
  return 1;
}

export async function redundant(): Promise<number> {
  return await load();
}
