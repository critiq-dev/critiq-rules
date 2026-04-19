export function label(values: string[]) {
  const match = values.find((value) => value.startsWith('a'));
  const safeLabel = match ?? 'guest';

  return safeLabel + '!';
}
