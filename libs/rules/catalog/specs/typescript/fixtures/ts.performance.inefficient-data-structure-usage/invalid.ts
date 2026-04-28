export function firstBlockedId(blockedIds: string[], candidates: string[]): string | undefined {
  for (const candidate of candidates) {
    if (blockedIds.includes(candidate)) {
      return candidate;
    }
  }

  return undefined;
}
