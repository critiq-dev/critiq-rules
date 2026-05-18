async function load(): Promise<number> {
  return 1;
}

export async function fine(): Promise<number> {
  try {
    return await load();
  } catch {
    return 0;
  }
}

export async function direct(): Promise<number> {
  return load();
}
