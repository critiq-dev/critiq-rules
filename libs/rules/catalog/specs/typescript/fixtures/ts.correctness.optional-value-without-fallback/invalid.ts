export function label(values: string[]) {
  const match = values.find((value) => value.startsWith('a'));

  return match + '!';
}
