export async function invalid(): Promise<void> {
  await 1;
  await Math.max(1, 2);
}
