export function firstBlockedId(blockedIds: string[], candidates: string[]): string | undefined {
  const blockedIdIndex = new Set(blockedIds);

  for (const candidate of candidates) {
    if (blockedIdIndex.has(candidate)) {
      return candidate;
    }
  }

  return undefined;
}
