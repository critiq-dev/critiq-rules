export async function retry(
  maxAttempts: number,
  delayMs: number,
): Promise<void> {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await new Promise((resolve) => setTimeout(resolve, delayMs));
      return;
    } catch {
      if (attempt === maxAttempts) {
        throw new Error('max retries exceeded');
      }
    }
  }
}
