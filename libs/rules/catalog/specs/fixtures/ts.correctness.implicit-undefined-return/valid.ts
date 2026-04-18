export function maybeValue(flag: boolean): string {
  if (flag) {
    return 'ready';
  }

  return 'pending';
}
