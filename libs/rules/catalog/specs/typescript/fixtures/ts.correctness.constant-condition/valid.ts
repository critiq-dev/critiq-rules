export function selectBranch(state: string): number {
  if (state === 'ready') {
    return 1;
  }

  return 0;
}
