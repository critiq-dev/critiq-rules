export function misused(): void {
  [1, 2, 3].map(async (value) => value + 1);
}
