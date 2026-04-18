export async function swallowFailure(): Promise<void> {
  try {
    await performWork();
  } catch (error) {
    logger.error('work failed', error);
  }
}
