export async function poll(intervalMs: number): Promise<void> {
  for (let attempt = 0; attempt < 5; attempt++) {
    await new Promise((resolve) => setTimeout(resolve, intervalMs));
  }
}
