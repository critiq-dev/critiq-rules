export async function process(items: number[]): Promise<void> {
  await Promise.all(items.map((item) => item));
}
