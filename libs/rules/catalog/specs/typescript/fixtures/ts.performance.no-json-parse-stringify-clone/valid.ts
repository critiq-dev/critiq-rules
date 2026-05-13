export function good<T>(input: T): T {
  return structuredClone(input);
}
