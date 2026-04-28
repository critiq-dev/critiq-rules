export async function reportFailure(): Promise<void> {
  try {
    await performWork();
  } catch (error) {
    logger.error('work failed', error);
  }
}
