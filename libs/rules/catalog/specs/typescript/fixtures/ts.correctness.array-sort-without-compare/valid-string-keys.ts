export function keyNames(obj: Record<string, unknown>) {
  const a = Object.keys(obj).sort();
  const b = Object.getOwnPropertyNames(obj).sort();
  const c = Reflect.ownKeys(obj).sort();
  return [a, b, c];
}
