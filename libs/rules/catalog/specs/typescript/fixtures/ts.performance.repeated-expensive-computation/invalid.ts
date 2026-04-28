export function render(payload: unknown): string {
  const first = JSON.stringify(payload);
  const second = JSON.stringify(payload);

  return first + second;
}
