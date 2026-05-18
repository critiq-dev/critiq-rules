export function customSort(values: number[]) {
  return [...values].sort((left, right) => left - right);
}
