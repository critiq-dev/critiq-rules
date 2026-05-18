async function load(): Promise<number> {
  return 1;
}

export function handler(): void {
  load().then(() => {
    await load();
  });
}
