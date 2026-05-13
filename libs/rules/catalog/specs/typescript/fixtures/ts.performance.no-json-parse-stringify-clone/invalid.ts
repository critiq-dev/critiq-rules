export function bad(input: unknown) {
  return JSON.parse(JSON.stringify(input));
}
