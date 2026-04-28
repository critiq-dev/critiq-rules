export async function swallowFailure(): Promise<void> {
  try {
    await performWork();
  } catch (error) {
    recoverLocally();
  }
}
