export function check(value: string): boolean {
  return value === 'hello';
}

export function sort(a: string, b: string): number {
  return a.localeCompare(b);
}
