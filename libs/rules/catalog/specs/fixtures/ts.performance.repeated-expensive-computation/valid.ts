export function render(payload: unknown): string {
  const serialized = JSON.stringify(payload);

  return serialized + serialized;
}
