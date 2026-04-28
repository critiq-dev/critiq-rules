export function correlate(left: string[], right: string[]): boolean {
  const rightIndex = new Set(right);

  for (const value of left) {
    if (rightIndex.has(value)) {
      return true;
    }
  }

  return false;
}
