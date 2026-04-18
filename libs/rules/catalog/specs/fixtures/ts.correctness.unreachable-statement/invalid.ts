export function unreachableValue(flag: boolean): number {
  if (flag) {
    return 1;
    const deadValue = 2;
  }

  return 3;
}
