export async function swallowFailure(): Promise<void> {
  try {
    await performWork();
  } catch (error) {
    // The caught error is inspected (instanceof check) but never logged,
    // rethrown, forwarded to any function, or propagated through a fallback
    // return. This is a genuine swallowed error.
    if (error instanceof Error) {
      // No handling — just a comment.
    }
  }
}

declare function performWork(): Promise<void>;
