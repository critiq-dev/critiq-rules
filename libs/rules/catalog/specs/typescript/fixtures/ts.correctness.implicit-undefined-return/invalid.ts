export function maybeValue(flag: boolean): string | undefined {
  if (flag) {
    return 'ready';
  }
}
