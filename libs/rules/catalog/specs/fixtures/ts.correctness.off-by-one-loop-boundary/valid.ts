export function clone(values: string[]): string[] {
  const copy: string[] = [];

  for (let index = 0; index < values.length; index++) {
    copy.push(values[index]);
  }

  return copy;
}
