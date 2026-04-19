export function correlate(left: string[], right: string[]): boolean {
  for (const first of left) {
    for (const second of right) {
      if (first === second) {
        return true;
      }
    }
  }

  return false;
}
